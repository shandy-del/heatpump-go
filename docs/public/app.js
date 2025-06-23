// 急救站数据
const emergencies = [
    { 
        title: "Your electricity bill just doubled?", 
        solution: "5-Minute Self-Check Guide", 
        icon: "fa-bolt",
        color: "bg-red-100 border-red-500",
        textColor: "text-red-700"
    },
    { 
        title: "Cold room in winter?", 
        solution: "Emergency Heat Settings Kit", 
        icon: "fa-snowflake",
        color: "bg-blue-100 border-blue-500",
        textColor: "text-blue-700"
    },
    { 
        title: "Heat pump finantial support rejected?", 
        solution: "Latest Policy Updates Explained", 
        icon: "fa-file-invoice",
        color: "bg-green-100 border-green-500",
        textColor: "text-green-700"
    }
];

// 核心模块数据
const modules = [
    {
        id: "core",
        title: "Core Knowledge",
        subtitle: "Essential principles for every user",
        icon: "fa-brain",
        iconColor: "bg-blue-100 text-blue-600",
        borderColor: "border-blue-400",
        topics: ["How Heat Pumps Work", "Understanding the COP", "Heat Pump Components Explained", "Energy Efficiency Fundamentals"]
    },
    {
        id: "optimization",
        title: "Optimization Lab",
        subtitle: "Proven efficiency boosters",
        icon: "fa-chart-line",
        iconColor: "bg-green-100 text-green-600",
        borderColor: "border-green-400",
        topics: ["Temperature Setting Strategies", "Seasonal Optimization Tips", "Smart Controls Setup", "Long-Term Maintenance Plan"]
    },
    {
        id: "daily",
        title: "Daily Operator",
        subtitle: "Friendly operation guides",
        icon: "fa-user-cog",
        iconColor: "bg-yellow-100 text-yellow-600",
        borderColor: "border-yellow-400",
        topics: ["Maintenance Calendar", "Safe Operation Guide", "Energy-Saving Habits", "User Best Practices"]
    },
    {
        id: "sos",
        title: "SOS Diagnostics",
        subtitle: "Fast troubleshooting",
        icon: "fa-tools",
        iconColor: "bg-red-100 text-red-600",
        borderColor: "border-red-400",
        topics: ["Unusual Noise Diagnosis", "Performance Drop Analysis", "Emergency Fixes", "Error Code Decoder"]
    },
    {
        id: "uk",
        title: "UK Support Hub",
        subtitle: "Localized resources",
        icon: "fa-flag-uk",
        iconColor: "bg-purple-100 text-purple-600",
        borderColor: "border-purple-400",
        topics: ["Finantial Support Policy Explained", "Find Certified Installers", "Regional Climate Guide", "UK User Stories"]
    }
];

// 知识图谱节点
const knowledgeNodes = [
    { id: "1", title: "How Heat Pumps Work", x: 50, y: 30, links: ["2", "3"] },
    { id: "2", title: "Understanding the COP", x: 20, y: 60, links: ["4"] },
    { id: "3", title: "Refrigerant Cycle", x: 80, y: 60, links: ["4"] },
    { id: "4", title: "Temperature Settings", x: 50, y: 90, links: ["5"] },
    { id: "5", title: "Efficiency Optimization", x: 50, y: 120 }
];

// 渲染急救站
function renderEmergencyStation() {
    const container = document.getElementById('emergencyCards');
    container.innerHTML = '';
    
    emergencies.forEach(emergency => {
        const card = document.createElement('div');
        card.className = `emergency-card rounded-lg p-4 shadow-md ${emergency.color}`;
        card.innerHTML = `
            <div class="flex items-center mb-3">
                <div class="w-10 h-10 rounded-full ${emergency.textColor} bg-white flex items-center justify-center mr-3">
                    <i class="fas ${emergency.icon}"></i>
                </div>
                <h3 class="font-bold text-lg ${emergency.textColor}">${emergency.title}</h3>
            </div>
            <p class="mb-3">${emergency.solution}</p>
            <button class="w-full bg-white ${emergency.textColor} font-semibold py-2 rounded-lg border ${emergency.textColor.replace('text', 'border')} hover:bg-opacity-20 transition">
                Start troubleshooting <i class="fas fa-arrow-right ml-2"></i>
            </button>
        `;
        container.appendChild(card);
    });
}

// 渲染核心模块
function renderCoreModules() {
    const container = document.getElementById('coreModules');
    container.innerHTML = '';
    
    modules.forEach(module => {
        const card = document.createElement('div');
        card.className = `module-card bg-white rounded-xl p-6 shadow-lg ${module.borderColor}`;
        card.innerHTML = `
            <div class="flex flex-col items-center mb-4">
                <div class="module-icon ${module.iconColor}">
                    <i class="fas ${module.icon}"></i>
                </div>
                <h3 class="text-xl font-bold text-center">${module.title}</h3>
            </div>
            <p class="text-gray-600 mb-4 text-center">${module.subtitle}</p>
            <ul class="space-y-2 mb-6">
                ${module.topics.map(topic => 
                    `<li class="flex items-start">
                        <span class="text-green-500 mr-2">•</span> 
                        <span class="text-gray-700">${topic}</span>
                    </li>`
                ).join('')}
            </ul>
            <button class="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all">
                Explore more <i class="fas fa-arrow-right ml-2"></i>
            </button>
        `;
        container.appendChild(card);
    });
}

// 渲染知识图谱
function renderKnowledgeGraph() {
    const container = document.getElementById('knowledgeGraph');
    container.innerHTML = '';
    container.className = 'knowledge-graph relative';
    
    // 创建节点
    knowledgeNodes.forEach(node => {
        const nodeEl = document.createElement('div');
        nodeEl.id = `node-${node.id}`;
        nodeEl.className = 'graph-node';
        nodeEl.style.gridArea = `${node.y / 20} / ${node.x / 20} / span 2 / span 2`;
        nodeEl.innerHTML = node.title;
        container.appendChild(nodeEl);
    });
    
    // 创建连线（简化版）
    const linesContainer = document.createElement('div');
    linesContainer.className = 'absolute inset-0 pointer-events-none';
    container.appendChild(linesContainer);
    
    knowledgeNodes.forEach(node => {
        if (node.links) {
            node.links.forEach(linkId => {
                const targetNode = knowledgeNodes.find(n => n.id === linkId);
                if (targetNode) {
                    const line = document.createElement('div');
                    line.className = 'graph-link';
                    
                    // 实际项目中应计算精确位置
                    line.style.width = '50px';
                    line.style.top = '40%';
                    line.style.left = '30%';
                    line.style.transform = 'rotate(45deg)';
                    
                    linesContainer.appendChild(line);
                }
            });
        }
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    renderEmergencyStation();
    renderCoreModules();
    renderKnowledgeGraph();
    
    // 搜索框动态提示
    const searchInput = document.getElementById('knowledgeSearch');
    const examples = [
        "How should I set the night-time temperature?",
        "How often should my heat pump defrost?",
        "Finantial support application steps",
        "What should I do if my heat pump is too noisy?",
        "A good COP value?"
    ];
    let currentIndex = 0;
    
    setInterval(() => {
        searchInput.placeholder = `Describe your question → e.g. ${examples[currentIndex]}`;
        currentIndex = (currentIndex + 1) % examples.length;
    }, 3000);
});