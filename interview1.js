// Character information data
const characterInfo = {
    "ShenWANG": {
      name: "ShenWANG",
      description: "Associate Researcher in Natural Sciences"
    },
    "ZhengCHEN": {
      name: "ZhengCHEN",
      description: "PPEI_B2_G1E member"
    },
    "ZifengCHEN": {
      name: "ZifengCHEN",
      description: "PPEI_B2_G1E member"
    },
    "HuQI": {
      name: "HuQI",
      description: "PPEI_B2_G1E member"
    }
  };
  
  // Dialogue data with options and branches
  const dialogue = [
    // Initial dialogue
    { speaker: "ShenWANG", text: "Thank you for having me. I'm excited to share my insights on biotechnology and research.", sprite: "images/professional1.png" },
    { speaker: "ZhengCHEN", text: "Welcome, ShenWANG! We're eager to hear your perspectives. Let's begin with some questions.", sprite: "images/interviewer1.png" },
    // Options trigger
    { type: "options", id: "question1" }
  ];
  
  // Options data
  const optionsData = {
    question1: [
      {
        text: "Professor Wang, what methods in your research career can inspire us undergraduates?",
        branch: [
          { speaker: "ZhengCHEN", text: "Professor Wang, what methods in your research career can inspire us undergraduates?", sprite: "images/interviewer1.png" },
          { speaker: "ShenWANG", text: "Start science research with planning and imitation—read literature first to understand others' research methods. Undergraduates, with busy courses, should learn mainly through literature. Extensive imitation precedes original ideas; while graduate students can judge methods independently, undergraduates with less experience should try more initially.", sprite: "images/professional1.png" },
          { speaker: "ZhengCHEN", text: "So undergraduates should learn via literature and early experimentation to gradually build research methods and understand research logic, laying a foundation for deeper exploration.", sprite: "images/interviewer1.png" }
        ]
      },
      {
        text: "Which cutting-edge biotechnologies do you think are most likely to drive scientific breakthroughs?",
        branch: [
          { speaker: "ZifengCHEN", text: "Which cutting-edge biotechnologies do you think are most likely to drive scientific breakthroughs?", sprite: "images/interviewer2.png" },
          { speaker: "ShenWANG", text: "The intersection of AI and biology is most promising. Tools like AlphaFold predict protein structures/interactions; AI enhances microscopy and finds data correlations. Advances in super-resolution imaging and protein interaction prediction also continue.", sprite: "images/professional1.png" },
          { speaker: "ZifengCHEN", text: "In summary, AI-biology integration shows broad potential, with technologies like AlphaFold and super-resolution imaging driving breakthroughs in structure prediction and data analysis.", sprite: "images/interviewer2.png" }
        ]
      },
      {
        text: "What do you see as the core challenge for biologists in career development?",
        branch: [
          { speaker: "HuQI", text: "What do you see as the core challenge for biologists in career development?", sprite: "images/interviewer3.png" },
          { speaker: "ShenWANG", text: "Research integrity is critical. Academic fraud stems from personal interests—students for graduation, faculty for promotion. Biomedicine, with complex experiments/data, is prone to misconduct, damaging the academic environment. Upholding integrity is essential for discipline growth.", sprite: "images/professional1.png" },
          { speaker: "HuQI", text: "In short, academic integrity, as a core challenge, requires stronger ethics, better evaluation systems, and a healthy academic environment to prevent misconduct.", sprite: "images/interviewer3.png" }
        ]
      },
      {
        text: "After the 2000 gene-edited baby incident, how do we balance innovation and ethical risks with rapid biotech advancements?",
        branch: [
          { speaker: "HuQI", text: "After the 2000 gene-edited baby incident, how do we balance innovation and ethical risks with rapid biotech advancements?", sprite: "images/interviewer3.png" },
          { speaker: "ShenWANG", text: "Research ethics have rules (e.g., patient sample collection, animal experiments). While lab management has potential issues, schools enforce safety norms (chemical protection, regular inspections). Cases like Sun Yat-sen University’s student cancer, though not necessarily lab-related, highlight existing strict safety protocols.", sprite: "images/professional1.png" },
          { speaker: "HuQI", text: "In essence, ethical rules and lab safety standards safeguard innovation-risk balance; strict protocol implementation reduces risks.", sprite: "images/interviewer3.png" }
        ]
      },
      {
        text: "If guiding undergraduates, what would you prioritize?",
        branch: [
          { speaker: "ZhengCHEN", text: "If guiding undergraduates, what would you prioritize?", sprite: "images/interviewer1.png" },
          { speaker: "ShenWANG", text: "In freshman/sophomore years, rotate through labs and read literature to explore interests. Junior/senior years: join labs, use undergraduate innovation projects to build skills. For senior thesis, choose labs inside/outside school—early practice eases the transition to graduate studies. Focus on accumulation, not rushed experimentation, at the start.", sprite: "images/professional1.png" },
          { speaker: "ZhengCHEN", text: "To summarize, undergraduates should explore interests via lab rotations/literature in early years and engage in practical projects later to clarify directions and transition smoothly to graduate studies.", sprite: "images/interviewer1.png" }
        ]
      }
    ],
    finalQuestion: [
      {
        text: "Can you provide contacts of professionals in similar fields but different settings?",
        branch: [
          { speaker: "ZifengCHEN", text: "Can you provide contacts of professionals in similar fields but different settings (companies, other universities)?", sprite: "images/interviewer2.png" },
          { speaker: "ShenWANG", text: "I can recommend a junior colleague with 7-8 years in bioinformatics data analysis at a statistics company, Teacher Wei Fuxiang (biomechanics/biomedical research at our school), and Teacher Peng Di (bioinformatics/data analysis with experiments in Xue Yu’s team).", sprite: "images/professional1.png" },
          { speaker: "ZifengCHEN", text: "Thanks for sharing these contacts. We’ll reach out to learn about bioinformatics and biomedical research in different environments.", sprite: "images/interviewer2.png" }
        ]
      }
    ]
  };
  
  // State variables
  let currentDialogueIndex = 0;
  let currentInterviewer = null; // Tracks current Interviewer
  let interviewerRounds = 0; // Tracks rounds since Interviewer appeared
  let isTyping = false; // Tracks if text is currently typing
  let typingTimeout = null; // Tracks typing timeout for clearing
  let selectedOptions = new Set(); // Tracks selected option indices for question1
  let currentBranch = null; // Tracks current branch dialogue
  let branchIndex = 0; // Tracks position in branch
  let showingOptions = false; // Tracks if options are displayed
  let currentQuestion = null; // Tracks current question ID
  
  // DOM elements
  const introScreen = document.getElementById('intro-screen');
  const nav = document.getElementById('nav');
  const dialogueBox = document.getElementById('dialogue-box');
  const dialogueText = document.getElementById('dialogue-text');
  const nameTag = document.getElementById('name-tag');
  const optionsContainer = document.getElementById('options-container');
  const leftSprite = document.getElementById('character-left');
  const centerSprite = document.getElementById('character-center');
  const rightSprite = document.getElementById('character-right');
  const leftInfo = leftSprite.querySelector('.character-info');
  const centerInfo = centerSprite.querySelector('.character-info');
  const rightInfo = rightSprite.querySelector('.character-info');
  
  // Function to display text character by character
  function typeText(text, callback) {
    console.log(`Typing text: ${text}`); // Debug log
    isTyping = true;
    dialogueText.textContent = '';
    let index = 0;
  
    function type() {
      if (index < text.length) {
        dialogueText.textContent += text[index];
        index++;
        typingTimeout = setTimeout(type, 50); // Typing speed: 50ms per character
      } else {
        isTyping = false;
        typingTimeout = null;
        callback();
      }
    }
    type();
  }
  
  // Function to stop typing animation and show full text
  function completeText(text) {
    console.log(`Completing text: ${text}`); // Debug log
    if (isTyping) {
      clearTimeout(typingTimeout);
      dialogueText.textContent = text;
      isTyping = false;
      typingTimeout = null;
    }
  }
  
  // Function to show options
  function showOptions(questionId) {
    console.log(`Showing options for ${questionId}`); // Debug log
    showingOptions = true;
    currentQuestion = questionId;
    optionsContainer.innerHTML = ''; // Clear previous options
    optionsContainer.classList.remove('hidden', 'vertical-center');
    optionsContainer.classList.add('visible');
    
    // Apply vertical centering for finalQuestion
    if (questionId === 'finalQuestion') {
      optionsContainer.classList.add('vertical-center');
    }
  
    dialogueText.textContent = 'Please select a question:';
    nameTag.textContent = '';
  
    const options = optionsData[questionId];
    if (!options) {
      console.error(`Options for ${questionId} not found`);
      optionsContainer.classList.add('hidden');
      optionsContainer.classList.remove('visible', 'vertical-center');
      dialogueText.textContent = 'Error: Options not found.';
      return;
    }
  
    options.forEach((option, index) => {
      const button = document.createElement('div');
      button.classList.add('option');
      if (questionId === 'question1' && selectedOptions.has(index)) {
        button.classList.add('selected');
      }
      button.textContent = option.text;
      button.addEventListener('click', () => {
        if (questionId === 'question1' && selectedOptions.has(index)) {
          return; // Prevent re-selecting
        }
        console.log(`Selected option ${index}: ${option.text}`); // Debug log
        optionsContainer.innerHTML = ''; // Clear options
        optionsContainer.classList.add('hidden');
        optionsContainer.classList.remove('visible', 'vertical-center');
        showingOptions = false;
        if (questionId === 'question1') {
          selectedOptions.add(index);
        }
        currentBranch = option.branch;
        branchIndex = 0;
        updateDialogue();
      });
      optionsContainer.appendChild(button);
    });
  }
  
  // Function to update character info
  function updateCharacterInfo(sprite, infoElement, speaker) {
    const info = characterInfo[speaker];
    if (info) {
      infoElement.innerHTML = `<strong>${info.name}</strong><br>${info.description}`;
      console.log(`Updated info for ${speaker}: ${info.name}, ${info.description}`); // Debug log
    } else {
      infoElement.innerHTML = '';
      console.warn(`No info found for ${speaker}`); // Debug log
    }
  }
  
  // Function to update dialogue and sprites
  function updateDialogue() {
    console.log(`updateDialogue: dialogueIndex=${currentDialogueIndex}, branchIndex=${branchIndex}, showingOptions=${showingOptions}, selectedOptions=${selectedOptions.size}, currentInterviewer=${currentInterviewer}, interviewerRounds=${interviewerRounds}`); // Debug log
  
    // Ensure options container is hidden during dialogue
    if (!showingOptions) {
      optionsContainer.innerHTML = ''; // Clear options content
      optionsContainer.classList.add('hidden');
      optionsContainer.classList.remove('visible', 'vertical-center');
    }
  
    if (currentBranch) {
      // Handle branch dialogue
      if (branchIndex < currentBranch.length) {
        const current = currentBranch[branchIndex];
        nameTag.textContent = current.speaker;
  
        // Update Interviewer tracking
        if (current.speaker !== "ShenWANG") {
          currentInterviewer = current.speaker;
          interviewerRounds = 0;
        } else {
          interviewerRounds++;
        }
  
        // Update sprites
        clearSprites();
        if (current.speaker === "ShenWANG" && (!currentInterviewer || interviewerRounds >= 3)) {
          // ShenWANG alone, show in center
          const shenWangSprite = current.sprite || dialogue.find(d => d.speaker === "ShenWANG")?.sprite || "images/professional1.png";
          console.log(`Showing ShenWANG sprite at center: ${shenWangSprite}`); // Debug log
          centerSprite.style.backgroundImage = `url('${shenWangSprite}')`;
          centerSprite.classList.add('visible');
          updateCharacterInfo(centerSprite, centerInfo, current.speaker);
        } else {
          // ShenWANG and Interviewer
          const shenWangSprite = current.sprite && current.speaker === "ShenWANG" ? current.sprite : dialogue.find(d => d.speaker === "ShenWANG")?.sprite || "images/professional1.png";
          console.log(`Showing ShenWANG sprite at left: ${shenWangSprite}`); // Debug log
          leftSprite.style.backgroundImage = `url('${shenWangSprite}')`;
          leftSprite.classList.add('visible');
          updateCharacterInfo(leftSprite, leftInfo, "ShenWANG");
          if (currentInterviewer && interviewerRounds < 3) {
            const interviewerSprite = dialogue.find(d => d.speaker === currentInterviewer)?.sprite || optionsData[currentQuestion]?.find(opt => opt.branch.some(b => b.speaker === currentInterviewer))?.branch.find(b => b.speaker === currentInterviewer)?.sprite;
            if (interviewerSprite) {
              console.log(`Showing Interviewer sprite at right: ${interviewerSprite}`); // Debug log
              rightSprite.style.backgroundImage = `url('${interviewerSprite}')`;
              rightSprite.classList.add('visible');
              updateCharacterInfo(rightSprite, rightInfo, currentInterviewer);
            } else {
              console.warn(`No sprite found for Interviewer: ${currentInterviewer}`); // Debug log
            }
          }
          // Set dimming based on active speaker
          if (current.speaker === "ShenWANG") {
            leftSprite.classList.remove('dimmed');
            rightSprite.classList.add('dimmed');
          } else {
            leftSprite.classList.add('dimmed');
            rightSprite.classList.remove('dimmed');
          }
        }
  
        // Type text
        typeText(current.text, () => {});
        return;
      } else {
        // Branch ended
        console.log('Branch ended'); // Debug log
        branchIndex = 0;
        currentBranch = null;
        if (currentQuestion === 'question1' && selectedOptions.size < 5) {
          showOptions('question1'); // Return to options
          return;
        } else if (currentQuestion === 'question1') {
          // All options selected, show final question
          showOptions('finalQuestion');
          return;
        } else {
          // Final question branch ended, conclude
          dialogueText.textContent = "Interview concluded.";
          nameTag.textContent = "";
          clearSprites();
          return;
        }
      }
    }
  
    // Main dialogue
    if (currentDialogueIndex >= dialogue.length) {
      console.log('Main dialogue ended'); // Debug log
      dialogueText.textContent = "Interview concluded.";
      nameTag.textContent = "";
      clearSprites();
      return;
    }
  
    const current = dialogue[currentDialogueIndex];
    console.log(`Processing dialogue: ${JSON.stringify(current)}`); // Debug log
    if (current.type === 'options') {
      showOptions(current.id);
      return;
    }
  
    nameTag.textContent = current.speaker;
  
    // Update Interviewer tracking
    if (current.speaker !== "ShenWANG") {
      currentInterviewer = current.speaker;
      interviewerRounds = 0;
    } else {
      interviewerRounds++;
    }
  
    // Update sprites
    clearSprites();
    if (current.speaker === "ShenWANG" && (!currentInterviewer || interviewerRounds >= 3)) {
      // ShenWANG alone, show in center
      const shenWangSprite = current.sprite || dialogue.find(d => d.speaker === "ShenWANG")?.sprite || "images/professional1.png";
      console.log(`Showing ShenWANG sprite at center: ${shenWangSprite}`); // Debug log
      centerSprite.style.backgroundImage = `url('${shenWangSprite}')`;
      centerSprite.classList.add('visible');
      updateCharacterInfo(centerSprite, centerInfo, current.speaker);
    } else {
      // ShenWANG and Interviewer
      const shenWangSprite = current.sprite && current.speaker === "ShenWANG" ? current.sprite : dialogue.find(d => d.speaker === "ShenWANG")?.sprite || "images/professional1.png";
      console.log(`Showing ShenWANG sprite at left: ${shenWangSprite}`); // Debug log
      leftSprite.style.backgroundImage = `url('${shenWangSprite}')`;
      leftSprite.classList.add('visible');
      updateCharacterInfo(leftSprite, leftInfo, "ShenWANG");
      if (currentInterviewer && interviewerRounds < 3) {
        const interviewerSprite = dialogue.find(d => d.speaker === currentInterviewer)?.sprite || optionsData[currentQuestion]?.find(opt => opt.branch.some(b => b.speaker === currentInterviewer))?.branch.find(b => b.speaker === currentInterviewer)?.sprite;
        if (interviewerSprite) {
          console.log(`Showing Interviewer sprite at right: ${interviewerSprite}`); // Debug log
          rightSprite.style.backgroundImage = `url('${interviewerSprite}')`;
          rightSprite.classList.add('visible');
          updateCharacterInfo(rightSprite, rightInfo, currentInterviewer);
        } else {
          console.warn(`No sprite found for Interviewer: ${currentInterviewer}`); // Debug log
        }
      }
      // Set dimming based on active speaker
      if (current.speaker === "ShenWANG") {
        leftSprite.classList.remove('dimmed');
        rightSprite.classList.add('dimmed');
      } else {
        leftSprite.classList.add('dimmed');
        rightSprite.classList.remove('dimmed');
      }
    }
  
    // Type text
    typeText(current.text, () => {});
  }
  
  // Function to clear all sprites
  function clearSprites() {
    console.log('Clearing sprites'); // Debug log
    leftSprite.classList.remove('visible', 'dimmed');
    centerSprite.classList.remove('visible', 'dimmed');
    rightSprite.classList.remove('visible', 'dimmed');
    leftSprite.style.backgroundImage = '';
    centerSprite.style.backgroundImage = '';
    rightSprite.style.backgroundImage = '';
    leftInfo.innerHTML = '';
    centerInfo.innerHTML = '';
    rightInfo.innerHTML = '';
  }
  
  // Handle intro screen click
  introScreen.addEventListener('click', () => {
    console.log('Intro screen clicked'); // Debug log
    introScreen.classList.add('fade-out');
    setTimeout(() => {
      introScreen.remove(); // Remove intro screen after fade-out
      // Show interview interface
      nav.classList.remove('hidden');
      dialogueBox.classList.remove('hidden');
      leftSprite.classList.remove('hidden');
      centerSprite.classList.remove('hidden');
      rightSprite.classList.remove('hidden');
      updateDialogue(); // Start dialogue
    }, 1000); // Match fade-out duration (1s)
  });
  
  // Event listener for advancing dialogue (click anywhere on the page)
  document.addEventListener('click', (event) => {
    console.log('Page clicked'); // Debug log
    // Prevent clicks on intro screen, navigation bar, or options from triggering dialogue advance
    if (introScreen && introScreen.contains(event.target)) {
      console.log('Click ignored: intro screen'); // Debug log
      return;
    }
    if (event.target.closest('#nav') || event.target.classList.contains('option')) {
      console.log('Click ignored: nav or option'); // Debug log
      return;
    }
    if (showingOptions) {
      console.log('Click ignored: showing options'); // Debug log
      return; // Do nothing if options are displayed
    }
  
    if (isTyping) {
      // If typing, complete the text immediately
      const currentText = currentBranch ? currentBranch[branchIndex]?.text : dialogue[currentDialogueIndex]?.text;
      if (currentText) {
        console.log('Completing current text'); // Debug log
        completeText(currentText);
      } else {
        console.warn(`No current text to complete`); // Debug log
      }
    } else {
      // Move to next dialogue
      console.log('Advancing dialogue'); // Debug log
      if (currentBranch) {
        branchIndex++;
      } else {
        currentDialogueIndex++;
        if (interviewerRounds >= 3) {
          currentInterviewer = null;
          interviewerRounds = 0;
        }
      }
      updateDialogue();
    }
  });