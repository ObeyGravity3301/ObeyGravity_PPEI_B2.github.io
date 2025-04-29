// Character information data
const characterInfo = {
    "ZhaohuiTANG": {
      name: "ZhaohuiTANG",
      description: "Teacher at Experimental Teaching Center"
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
    { speaker: "ZhaohuiTANG", text: "Thank you for inviting me. I'm eager to share my experiences in teaching and genetics research.", sprite: "images/professional2.png" },
    { speaker: "ZhengCHEN", text: "Welcome, Teacher Tang! We are honored to hear your insights. Let's begin with some questions.", sprite: "images/interviewer1.png" },
    // Options trigger
    { type: "options", id: "question1" }
  ];
  
  // Options data
  const optionsData = {
    question1: [
      {
        text: "Teacher Tang, what research methods have been most inspiring to undergraduate students in your career?",
        branch: [
          { speaker: "ZhengCHEN", text: "Teacher Tang, what research methods have been most inspiring to undergraduate students in your career?", sprite: "images/interviewer1.png" },
          { speaker: "ZhaohuiTANG", text: "Undergraduate students should focus on experimental design and consider whether the techniques used can address the research problem. For basic practice, emphasize the problems to be solved and the ideas behind the experimental design.", sprite: "images/professional2.png" },
          { speaker: "ZhaohuiTANG", text: "In my teaching, I explain the theory in depth to help students grasp the principles of the experimental procedures.", sprite: "images/professional2.png" },
          { speaker: "ZhengCHEN", text: "Could you share how to guide undergraduates to apply these principles flexibly across different experimental scenarios?", sprite: "images/interviewer1.png" },
          { speaker: "ZhaohuiTANG", text: "Encourage students to draw inferences from one case to another, fostering experimental learning through practical application.", sprite: "images/professional2.png" }
        ]
      },
      {
        text: "Teacher Tang, which biotechnologies are most likely to drive breakthroughs in biology today?",
        branch: [
          { speaker: "ZifengCHEN", text: "Teacher Tang, which biotechnologies are most likely to drive breakthroughs in biology today?", sprite: "images/interviewer2.png" },
          { speaker: "ZhaohuiTANG", text: "In genetics, gene editing technology has advanced rapidly. When applied to undergraduate teaching, new technologies often emerge quickly.", sprite: "images/professional2.png" },
          { speaker: "ZhaohuiTANG", text: "However, rapid technological updates and high experimental costs make it challenging to develop relevant courses.", sprite: "images/professional2.png" },
          { speaker: "ZifengCHEN", text: "With rapid technology iteration and limited resources, how should undergraduates pace their learning of cutting-edge technologies?", sprite: "images/interviewer2.png" },
          { speaker: "ZhaohuiTANG", text: "Gene editing holds great potential, especially in treating genetic diseases. The U.S. FDA has approved related therapies, and more will follow, advancing both treatment and basic research.", sprite: "images/professional2.png" }
        ]
      },
      {
        text: "Teacher Tang, what are the core challenges biologists face in their careers?",
        branch: [
          { speaker: "HuQI", text: "Teacher Tang, what are the core challenges biologists face in their careers?", sprite: "images/interviewer3.png" },
          { speaker: "ZhaohuiTANG", text: "For biologists, especially those with PhDs who become PIs, the biggest challenge is innovation—finding significant, novel research questions.", sprite: "images/professional2.png" },
          { speaker: "ZhaohuiTANG", text: "Many PIs follow national policy directions for funding, but we should avoid blind trends and explore valuable, innovative directions.", sprite: "images/professional2.png" },
          { speaker: "HuQI", text: "With interdisciplinary research growing, how can one balance deep specialization with pioneering new directions?", sprite: "images/interviewer3.png" },
          { speaker: "ZhaohuiTANG", text: "In ophthalmic genetics, for example, moving from genetic studies to autophagy mechanisms and exploring new cell death pathways requires deep and broad innovation.", sprite: "images/professional2.png" }
        ]
      },
      {
        text: "Teacher Tang, how should we view research ethics and social responsibility in biotechnology?",
        branch: [
          { speaker: "HuQI", text: "Teacher Tang, how should we view research ethics and social responsibility in biotechnology?", sprite: "images/interviewer3.png" },
          { speaker: "ZhaohuiTANG", text: "Science is a double-edged sword. Gene editing can treat genetic diseases in the hands of those with good intentions, but it can be abused, much like nuclear weapons.", sprite: "images/professional2.png" },
          { speaker: "ZhaohuiTANG", text: "Scientists worldwide must follow unified rules and establish international bodies to regulate biotechnology and prevent catastrophic misuse.", sprite: "images/professional2.png" },
          { speaker: "HuQI", text: "As students, how can we participate in studying and practicing research ethics?", sprite: "images/interviewer3.png" },
          { speaker: "ZhaohuiTANG", text: "Engage in discussions with all stakeholders to clarify development directions and establish normative guidelines.", sprite: "images/professional2.png" }
        ]
      },
      {
        text: "Teacher Tang, what skills or advice would you prioritize for a first-year undergraduate's research plan?",
        branch: [
          { speaker: "ZhengCHEN", text: "Teacher Tang, what skills or advice would you prioritize for a first-year undergraduate's research plan?", sprite: "images/interviewer1.png" },
          { speaker: "ZhaohuiTANG", text: "In the first semester, focus on adapting to university life, passing courses, and exploring interests through clubs to understand your professional and personal strengths.", sprite: "images/professional2.png" },
          { speaker: "ZhaohuiTANG", text: "In the second semester and sophomore year, reflect on your future path—work or graduate school, domestic or abroad, and major choice. Prepare accordingly in sophomore and junior years.", sprite: "images/professional2.png" },
          { speaker: "ZhaohuiTANG", text: "For graduate school, pass language tests, improve grades, complete a project, and deepen your understanding of research topics.", sprite: "images/professional2.png" },
          { speaker: "ZhengCHEN", text: "For interdisciplinary development, which majors should be prioritized for a second degree?", sprite: "images/interviewer1.png" },
          { speaker: "ZhaohuiTANG", text: "In China, maintain strong grades for graduate school admission, seize summer camp opportunities, and intern with preferred mentors. Decide if life sciences is your career path.", sprite: "images/professional2.png" },
          { speaker: "ZhaohuiTANG", text: "To expand into other fields, consider a second degree to boost competitiveness, as interdisciplinary talent is increasingly in demand.", sprite: "images/professional2.png" }
        ]
      }
    ],
    finalQuestion: [
      {
        text: "Teacher Tang, could you recommend 2 other professionals that in the same field with you but in another company or university?",
        branch: [
          { speaker: "ZifengCHEN", text: "Teacher Tang, could you recommend 2 other professionals that in the same field with you but in another company or university?", sprite: "images/interviewer2.png" },
          { speaker: "ZhaohuiTANG", text: "If you won't interview my recommended teachers, I can provide a list. If interviews are possible, I need to confirm with them first, as some may have privacy or photography concerns.", sprite: "images/professional2.png" }
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
        if (current.speaker !== "ZhaohuiTANG") {
          currentInterviewer = current.speaker;
          interviewerRounds = 0;
        } else {
          interviewerRounds++;
        }
  
        // Update sprites
        clearSprites();
        if (current.speaker === "ZhaohuiTANG" && (!currentInterviewer || interviewerRounds >= 3)) {
          // ZhaohuiTANG alone, show in center
          const tangSprite = current.sprite || dialogue.find(d => d.speaker === "ZhaohuiTANG")?.sprite || "images/professional2.png";
          console.log(`Showing ZhaohuiTANG sprite at center: ${tangSprite}`); // Debug log
          centerSprite.style.backgroundImage = `url('${tangSprite}')`;
          centerSprite.classList.add('visible');
          updateCharacterInfo(centerSprite, centerInfo, current.speaker);
        } else {
          // ZhaohuiTANG and Interviewer
          const tangSprite = current.sprite && current.speaker === "ZhaohuiTANG" ? current.sprite : dialogue.find(d => d.speaker === "ZhaohuiTANG")?.sprite || "images/professional2.png";
          console.log(`Showing ZhaohuiTANG sprite at left: ${tangSprite}`); // Debug log
          leftSprite.style.backgroundImage = `url('${tangSprite}')`;
          leftSprite.classList.add('visible');
          updateCharacterInfo(leftSprite, leftInfo, "ZhaohuiTANG");
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
          if (current.speaker === "ZhaohuiTANG") {
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
    if (current.speaker !== "ZhaohuiTANG") {
      currentInterviewer = current.speaker;
      interviewerRounds = 0;
    } else {
      interviewerRounds++;
    }
  
    // Update sprites
    clearSprites();
    if (current.speaker === "ZhaohuiTANG" && (!currentInterviewer || interviewerRounds >= 3)) {
      // ZhaohuiTANG alone, show in center
      const tangSprite = current.sprite || dialogue.find(d => d.speaker === "ZhaohuiTANG")?.sprite || "images/professional2.png";
      console.log(`Showing ZhaohuiTANG sprite at center: ${tangSprite}`); // Debug log
      centerSprite.style.backgroundImage = `url('${tangSprite}')`;
      centerSprite.classList.add('visible');
      updateCharacterInfo(centerSprite, centerInfo, current.speaker);
    } else {
      // ZhaohuiTANG and Interviewer
      const tangSprite = current.sprite && current.speaker === "ZhaohuiTANG" ? current.sprite : dialogue.find(d => d.speaker === "ZhaohuiTANG")?.sprite || "images/professional2.png";
      console.log(`Showing ZhaohuiTANG sprite at left: ${tangSprite}`); // Debug log
      leftSprite.style.backgroundImage = `url('${tangSprite}')`;
      leftSprite.classList.add('visible');
      updateCharacterInfo(leftSprite, leftInfo, "ZhaohuiTANG");
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
      if (current.speaker === "ZhaohuiTANG") {
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