const jobs = [
    { name: "Fast Food Worker", pay: 1, upgradeCost: 10 },
    { name: "Retail Clerk", pay: 5, upgradeCost: 50 },
    { name: "Office Assistant", pay: 20, upgradeCost: 200 },
    { name: "Software Developer", pay: 100, upgradeCost: 1000 },
    { name: "Manager", pay: 500, upgradeCost: 5000 },
    { name: "Entrepreneur", pay: 2000, upgradeCost: null }
];

let currentJobIndex = 0;
let money = 0;

const currentJobElem = document.getElementById('current-job');
const moneyElem = document.getElementById('money');
const workBtn = document.getElementById('work-btn');
const upgradeBtn = document.getElementById('upgrade-btn');
const upgradeInfo = document.getElementById('upgrade-info');

function updateUI() {
    currentJobElem.textContent = jobs[currentJobIndex].name;
    moneyElem.textContent = money;
    if (jobs[currentJobIndex].upgradeCost) {
        upgradeBtn.disabled = money < jobs[currentJobIndex].upgradeCost;
        upgradeInfo.textContent = `Upgrade to ${jobs[currentJobIndex+1].name} for $${jobs[currentJobIndex].upgradeCost}`;
    } else {
        upgradeBtn.disabled = true;
        upgradeInfo.textContent = "You have the best job!";
    }
}

workBtn.addEventListener('click', () => {
    money += jobs[currentJobIndex].pay;
    updateUI();
});

upgradeBtn.addEventListener('click', () => {
    if (jobs[currentJobIndex].upgradeCost && money >= jobs[currentJobIndex].upgradeCost) {
        money -= jobs[currentJobIndex].upgradeCost;
        currentJobIndex++;
        updateUI();
    }
});

updateUI();
