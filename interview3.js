// Character information data
const characterInfo = {
    "YunBAI": {
      name: "YunBAI",
      description: "Senior Engineer at Experimental Teaching Center"
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
    { speaker: "YunBAI", text: "Thank you for having me. I'm excited to share my insights on biology and engineering education.", sprite: "images/professional3.png" },
    { speaker: "ZhengCHEN", text: "Welcome, Teacher Bai! We are honored to hear your perspectives. Let's begin with some questions.", sprite: "images/interviewer1.png" },
    // Options trigger
    { type: "options", id: "question1" }
  ];
  
  // Options data
  const optionsData = {
    question1: [
      {
        text: "Teacher Bai, what research directions in biology suit different personalities?",
        branch: [
          { speaker: "ZhengCHEN", text: "Teacher Bai, what research directions in biology suit different personalities?", sprite: "images/interviewer1.png" },
          { speaker: "YunBAI", text: "Refer to the Holland Test. R-type (realistic) personalities suit hands-on work like beer brewing; R-type with research orientation fits practical and scientific tasks. Artistic types suit microbial painting; social types suit medical communication services; enterprising types suit entrepreneurship; conventional types thrive in teams. For lab-averse students, bioinformatics is ideal.", sprite: "images/professional3.png" },
          { speaker: "ZhengCHEN", text: "I see. The suitability of personalities for biological research can indeed be referenced using tools like the Holland Test.", sprite: "images/interviewer1.png" }
        ]
      },
      {
        text: "Teacher Bai, do traditional lab skills still hold value in the era of automation?",
        branch: [
          { speaker: "ZifengCHEN", text: "Teacher Bai, do traditional lab skills still hold value in the era of automation?", sprite: "images/interviewer2.png" },
          { speaker: "YunBAI", text: "Yes. Molecular biology’s cutting-and-ligation methods help students understand workflows and infer issues. Learning traditional methods first builds a foundation, easing mastery of advanced technologies. For example, mastering traditional fermenters allows easier use of automated ones; starting with automation makes troubleshooting harder.", sprite: "images/professional3.png" },
          { speaker: "ZifengCHEN", text: "True. Traditional lab skills remain foundational for understanding experimental logic and troubleshooting.", sprite: "images/interviewer2.png" }
        ]
      },
      {
        text: "Teacher Bai, what study habits from your undergraduate days still impact you?",
        branch: [
          { speaker: "HuQI", text: "Teacher Bai, what study habits from your undergraduate days still impact you?", sprite: "images/interviewer3.png" },
          { speaker: "YunBAI", text: "As an undergrad, I meticulously recorded experimental procedures and data. Now, when problems arise, I review these records to identify root causes—a huge help.", sprite: "images/professional3.png" },
          { speaker: "HuQI", text: "I understand. Meticulous recording of experimental processes and data is crucial for troubleshooting in research.", sprite: "images/interviewer3.png" }
        ]
      },
      {
        text: "Teacher Bai, how can we avoid a generation gap between advisors and students?",
        branch: [
          { speaker: "HuQI", text: "Teacher Bai, how can we avoid a generation gap between advisors and students?", sprite: "images/interviewer3.png" },
          { speaker: "YunBAI", text: "Gaps are often self-created. Define shared goals before communicating; exchanging ideas around these goals turns gaps into strengths, like brainstorming. Viewing gaps as opposition harms both sides.", sprite: "images/professional3.png" },
          { speaker: "HuQI", text: "Makes sense. Transforming generational gaps into strengths by clarifying shared goals is key to effective communication.", sprite: "images/interviewer3.png" }
        ]
      },
      {
        text: "Teacher Bai, how can students assess if they’re suited for a research field?",
        branch: [
          { speaker: "ZhengCHEN", text: "Teacher Bai, how can students assess if they’re suited for a research field?", sprite: "images/interviewer1.png" },
          { speaker: "YunBAI", text: "Take Holland or MBTI tests calmly for accuracy. Understanding your personality helps identify suitable work, making it easier to excel and produce results.", sprite: "images/professional3.png" },
          { speaker: "ZhengCHEN", text: "Good point. Using personality tests and self-awareness is a viable way to assess research fit.", sprite: "images/interviewer1.png" }
        ]
      }
    ],
    finalQuestion: [
      {
        text: "Teacher Bai, could you share two colleagues with the same work but different backgrounds?",
        branch: [
          { speaker: "ZifengCHEN", text: "Teacher Bai, could you share two colleagues with the same work but different backgrounds?", sprite: "images/interviewer2.png" },
          { speaker: "YunBAI", text: "I recommend Dr. Xiao Yuzhou from the Institute of Virology, Chinese Academy of Sciences. Understanding the differences between their national-level research and our teaching-oriented work brings new insights.", sprite: "images/professional3.png" }
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
        if (current.speaker !== "YunBAI") {
          currentInterviewer = current.speaker;
          interviewerRounds = 0;
        } else {
          interviewerRounds++;
        }
  
        // Update sprites
        clearSprites();
        if (current.speaker === "YunBAI" && (!currentInterviewer || interviewerRounds >= 3)) {
          // YunBAI alone, show in center
          const baiSprite = current.sprite || dialogue.find(d => d.speaker === "YunBAI")?.sprite || "images/professional3.png";
          console.log(`Showing YunBAI sprite at center: ${baiSprite}`); // Debug log
          centerSprite.style.backgroundImage = `url('${baiSprite}')`;
          centerSprite.classList.add('visible');
          updateCharacterInfo(centerSprite, centerInfo, current.speaker);
        } else {
          // YunBAI and Interviewer
          const baiSprite = current.sprite && current.speaker === "YunBAI" ? current.sprite : dialogue.find(d => d.speaker === "YunBAI")?.sprite || "images/professional3.png";
          console.log(`Showing YunBAI sprite at left: ${baiSprite}`); // Debug log
          leftSprite.style.backgroundImage = `url('${baiSprite}')`;
          leftSprite.classList.add('visible');
          updateCharacterInfo(leftSprite, leftInfo, "YunBAI");
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
          if (current.speaker === "YunBAI") {
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
    if (current.speaker !== "YunBAI") {
      currentInterviewer = current.speaker;
      interviewerRounds = 0;
    } else {
      interviewerRounds++;
    }
  
    // Update sprites
    clearSprites();
    if (current.speaker === "YunBAI" && (!currentInterviewer || interviewerRounds >= 3)) {
      // YunBAI alone, show in center
      const baiSprite = current.sprite || dialogue.find(d => d.speaker === "YunBAI")?.sprite || "images/professional3.png";
      console.log(`Showing YunBAI sprite at center: ${baiSprite}`); // Debug log
      centerSprite.style.backgroundImage = `url('${baiSprite}')`;
      centerSprite.classList.add('visible');
      updateCharacterInfo(centerSprite, centerInfo, current.speaker);
    } else {
      // YunBAI and Interviewer
      const baiSprite = current.sprite && current.speaker === "YunBAI" ? current.sprite : dialogue.find(d => d.speaker === "YunBAI")?.sprite || "images/professional3.png";
      console.log(`Showing YunBAI sprite at left: ${baiSprite}`); // Debug log
      leftSprite.style.backgroundImage = `url('${baiSprite}')`;
      leftSprite.classList.add('visible');
      updateCharacterInfo(leftSprite, leftInfo, "YunBAI");
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
      if (current.speaker === "YunBAI") {
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