// 页面标识，用于加载不同的对话
const pageId = document.location.pathname.split('/').pop();

// 开场对话（根据页面加载不同的开场）
const introDialogues = {
    "interview1.html": [
        { speaker: "Interviewer 3", text: "Good afternoon, thank you for taking the time to meet with us today." },
        { speaker: "Professional 1", text: "My pleasure. I'm happy to share my experiences with you." },
        { speaker: "Interviewer 1", text: "We're from the PPEI1-B2_G1E team, and we're excited to learn more about your work as a Data Scientist." },
        { speaker: "Professional 1", text: "Great! Let's get started then." }
    ],
    "interview2.html": [
        { speaker: "Interviewer 3", text: "Hello, thank you for joining us today!" },
        { speaker: "Professional 2", text: "My pleasure. I'm excited to talk about my work as a Marketing Manager." },
        { speaker: "Interviewer 2", text: "We're from the PPEI team, and we're eager to hear about your experiences." },
        { speaker: "Professional 2", text: "Wonderful! Let's begin." }
    ],
    "interview3.html": [
        { speaker: "Interviewer 3", text: "Hi, thanks for meeting with us today!" },
        { speaker: "Professional 3", text: "Happy to be here. I'm looking forward to discussing my role as a Software Engineer." },
        { speaker: "Interviewer 1", text: "We're from the PPEI1-B2_G1E team, studying tech careers." },
        { speaker: "Professional 3", text: "Nice to meet you all. Let's dive in!" }
    ]
};

// 提问对话（根据页面加载不同的提问对话）
const dialogues = {
    "interview1.html": {
        1: [
            { speaker: "Interviewer 1", text: "Can you tell us about your role?" },
            { speaker: "Professional 1", text: "Of course! I am a Data Scientist at a tech company. My role involves analyzing large datasets to help make business decisions." },
            { speaker: "Interviewer 2", text: "That sounds fascinating!" }
        ],
        2: [
            { speaker: "Interviewer 2", text: "What skills are most important for your job?" },
            { speaker: "Professional 1", text: "Definitely programming skills like Python and SQL, as well as critical thinking to interpret data effectively." }
        ],
        3: [
            { speaker: "Interviewer 3", text: "What challenges do you face in your role?" },
            { speaker: "Professional 1", text: "Dealing with incomplete data and tight deadlines can be tough, but it’s part of the job!" }
        ],
        4: [
            { speaker: "Interviewer 1", text: "What advice do you have for students?" },
            { speaker: "Professional 1", text: "Start learning early, build projects, and network with professionals in the field." },
            { speaker: "Interviewer 3", text: "That’s great advice!" }
        ],
        5: [
            { speaker: "Interviewer 2", text: "How did you get started in this field?" },
            { speaker: "Professional 1", text: "I started with a degree in computer science, then worked on internships to gain experience." }
        ]
    },
    "interview2.html": {
        1: [
            { speaker: "Interviewer 1", text: "Can you tell us about your role?" },
            { speaker: "Professional 2", text: "Certainly! I’m a Marketing Manager at an agency. I oversee campaigns and strategies to promote our clients' brands." },
            { speaker: "Interviewer 2", text: "That sounds exciting!" }
        ],
        2: [
            { speaker: "Interviewer 2", text: "What skills are most important for your job?" },
            { speaker: "Professional 2", text: "Communication, creativity, and analytical skills are key. You also need to understand market trends." }
        ],
        3: [
            { speaker: "Interviewer 3", text: "What challenges do you face in your role?" },
            { speaker: "Professional 2", text: "Keeping up with fast-changing trends and managing client expectations can be tough." }
        ],
        4: [
            { speaker: "Interviewer 1", text: "What advice do you have for students?" },
            { speaker: "Professional 2", text: "Gain experience through internships, and stay updated on marketing trends." },
            { speaker: "Interviewer 3", text: "Very helpful advice!" }
        ],
        5: [
            { speaker: "Interviewer 2", text: "How did you get started in this field?" },
            { speaker: "Professional 2", text: "I studied business with a focus on marketing, then started as a junior coordinator." }
        ]
    },
    "interview3.html": {
        1: [
            { speaker: "Interviewer 1", text: "Can you tell us about your role?" },
            { speaker: "Professional 3", text: "Sure! I’m a Software Engineer at a startup. I develop and maintain our core applications." },
            { speaker: "Interviewer 2", text: "That sounds challenging!" }
        ],
        2: [
            { speaker: "Interviewer 2", text: "What skills are most important for your job?" },
            { speaker: "Professional 3", text: "Coding skills in languages like Java and JavaScript, plus problem-solving and teamwork." }
        ],
        3: [
            { speaker: "Interviewer 3", text: "What challenges do you face in your role?" },
            { speaker: "Professional 3", text: "Debugging complex issues and adapting to new technologies can be demanding." }
        ],
        4: [
            { speaker: "Interviewer 1", text: "What advice do you have for students?" },
            { speaker: "Professional 3", text: "Work on personal projects, contribute to open source, and never stop learning." },
            { speaker: "Interviewer 3", text: "That’s really insightful!" }
        ],
        5: [
            { speaker: "Interviewer 2", text: "How did you get started in this field?" },
            { speaker: "Professional 3", text: "I studied computer science and landed my first job through a university tech fair." }
        ]
    }
};

// 当前对话状态
let currentDialogue = [];
let dialogueIndex = 0;
let currentSpeaker = null;
let speakerTurnCount = 0;
let isTyping = false;
let typingInterval = null;
let isIntroPhase = true;

// 打字机效果
function typeWriter(text, elementId, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    if (!element) return;
    element.textContent = "";
    isTyping = true;
    typingInterval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            typingInterval = null;
            isTyping = false;
            if (callback) callback();
        }
    }, 50);
}

// 跳过打字动画
function skipTyping() {
    if (isTyping && typingInterval) {
        clearInterval(typingInterval);
        typingInterval = null;
        isTyping = false;
        const dialogueTextElement = document.getElementById("dialogue-text");
        if (dialogueTextElement) {
            dialogueTextElement.textContent = currentDialogue[dialogueIndex].text;
        }
    }
}

// 控制立绘显示
function updateCharacters(speaker) {
    const character1 = document.getElementById("character1");
    const character2 = document.getElementById("character2");
    const character3 = document.getElementById("character3");
    const character4 = document.getElementById("character4");

    if (!character1 || !character2 || !character3 || !character4) return;

    character1.style.display = "block";
    character2.style.display = "none";
    character3.style.display = "none";
    character4.style.display = "none";

    character1.classList.remove("center", "left", "right", "not-speaking");
    character2.classList.remove("center", "left", "right", "not-speaking");
    character3.classList.remove("center", "left", "right", "not-speaking");
    character4.classList.remove("center", "left", "right", "not-speaking");

    if (speaker === "Professional 1" || speaker === "Professional 2" || speaker === "Professional 3") {
        character1.classList.add("center");
        currentSpeaker = null;
        speakerTurnCount = 0;
    } else {
        character1.classList.add("left");
        character1.classList.add("not-speaking");
        let activeCharacter;
        if (speaker === "Interviewer 1") {
            character2.style.display = "block";
            character2.classList.add("right");
            activeCharacter = character2;
        } else if (speaker === "Interviewer 2") {
            character3.style.display = "block";
            character3.classList.add("right");
            activeCharacter = character3;
        } else if (speaker === "Interviewer 3") {
            character4.style.display = "block";
            character4.classList.add("right");
            activeCharacter = character4;
        }

        if (currentSpeaker !== speaker) {
            currentSpeaker = speaker;
            speakerTurnCount = 0;
        }
        speakerTurnCount++;

        if (speakerTurnCount >= 3) {
            activeCharacter.style.display = "none";
            character1.classList.remove("left", "not-speaking");
            character1.classList.add("center");
            currentSpeaker = null;
            speakerTurnCount = 0;
        }
    }
}

function showDialogue(option) {
    const optionsElement = document.getElementById("options");
    if (!optionsElement) return;
    optionsElement.style.display = "none";
    
    currentDialogue = dialogues[pageId][option];
    dialogueIndex = 0;
    
    displayCurrentDialogue();
}

function displayCurrentDialogue() {
    if (dialogueIndex < currentDialogue.length) {
        const dialogue = currentDialogue[dialogueIndex];
        const speakerNameElement = document.getElementById("speaker-name");
        if (speakerNameElement) {
            speakerNameElement.textContent = dialogue.speaker;
        }
        updateCharacters(dialogue.speaker);
        typeWriter(dialogue.text, "dialogue-text");
    } else {
        const optionsElement = document.getElementById("options");
        const speakerNameElement = document.getElementById("speaker-name");
        const dialogueTextElement = document.getElementById("dialogue-text");
        if (optionsElement) optionsElement.style.display = "flex";
        if (speakerNameElement) speakerNameElement.textContent = "";
        if (dialogueTextElement) dialogueTextElement.textContent = "Choose another question to continue.";
        updateCharacters(pageId === "interview1.html" ? "Professional 1" : pageId === "interview2.html" ? "Professional 2" : "Professional 3");
    }
}

function nextDialogue() {
    dialogueIndex++;
    if (isIntroPhase) {
        if (dialogueIndex < currentDialogue.length) {
            displayCurrentDialogue();
        } else {
            isIntroPhase = false;
            const optionsElement = document.getElementById("options");
            const speakerNameElement = document.getElementById("speaker-name");
            const dialogueTextElement = document.getElementById("dialogue-text");
            if (optionsElement) optionsElement.style.display = "flex";
            if (speakerNameElement) speakerNameElement.textContent = "";
            if (dialogueTextElement) dialogueTextElement.textContent = "Choose a question to continue.";
            updateCharacters(pageId === "interview1.html" ? "Professional 1" : pageId === "interview2.html" ? "Professional 2" : "Professional 3");
        }
    } else {
        displayCurrentDialogue();
    }
}

function handleClick() {
    const sceneTransition = document.getElementById("scene-transition");
    if (sceneTransition && !sceneTransition.classList.contains("hidden")) {
        sceneTransition.classList.add("hidden");
        const dialogueBox = document.getElementById("dialogue-box");
        if (dialogueBox) dialogueBox.style.display = "flex";
        currentDialogue = introDialogues[pageId];
        dialogueIndex = 0;
        displayCurrentDialogue();
        return;
    }

    if (isTyping) {
        skipTyping();
    } else {
        nextDialogue();
    }
}

// 页面加载时初始化
document.addEventListener("DOMContentLoaded", () => {
    const sceneTransition = document.getElementById("scene-transition");
    if (sceneTransition) {
        sceneTransition.style.display = "flex";
    }
});