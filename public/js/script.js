const getEmailBtn = document.getElementById("get-email-btn");
const getEmailUrlBtn = document.getElementById("get-url-btn");
const copyEmailBtn = document.getElementById('copy-email-btn');
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const userNameInput = document.getElementById("username-input");
const corNameInput = document.getElementById("corname-input");
const alertDiv = document.getElementById("alert");
const refreshNameBtn = document.getElementById("refresh-name-btn");


async function getEmailInfo2() {
    //黑名单前缀，后端也会同步设置，算了，不设置了
    const blackList = ["admin", "pengju", "fuck", "you", "postmaster", "system", "webmaster", "administrator", "hostmaster", "service", "server", "root"]
    const email = (Math.random().toString(24) + '@domain.com').substring(2);
    if (blackList.includes(email.split('@')[0])) {
        showErrorAlert('Not allowed,please try again');
        return;
    }
    emailInput.value = email
    showSuccessAlert('Successfully generated email address');
}

//复制获取到的email
async function copyEmail() {
    if (emailInput.value == '') {
        showErrorAlert('Email is empty');
        return;
    }
    try {
        await navigator.clipboard.writeText(emailInput.value);
        showSuccessAlert('copy succeeded');
    } catch (e) {
        showErrorAlert('copy failed，may not support');
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


//生成随机名称
function generateTwoName() {
    const f = ['James', 'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Ford'];
    const g = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 1; i <= Math.floor(Math.random() * (10 - 5) + 5); i++) {
        result += g[Math.floor(Math.random() * g.length)];
    }
    const name = f[Math.floor(Math.random() * (f.length))] + ' ' + result[0].toUpperCase() + result.slice(1);

    const a = ['Gilead Sciences', 'EMC', 'ExxonMobil', 'Inte', 'Symantec', 'Amgen', 'Chevron', 'Cisco Systems', 'eBay', 'Apple', 'NetApp', 'Microsoft', 'Facebook', 'Salesforce.com', 'Google']
    const cname = a[Math.floor(Math.random() * a.length)];
    userNameInput.value = name;
    corNameInput.value = cname;
}
generateTwoName();


// 定义显示成功提示的函数
async function showSuccessAlert(message) {
    alertDiv.classList.remove("alert-danger");
    alertDiv.classList.add("alert-success");
    alertDiv.innerText = message;
    alertDiv.style.display = "block";

    // await sleep(4000);
    // alertDiv.style.opacity = 0;
    // alertDiv.addEventListener('transitionend', () => {
    //     alertDiv.style.display = 'none';
    //     alertDiv.style.opacity = 1;
    // });
}

// 定义显示错误提示的函数
async function showErrorAlert(message) {
    alertDiv.classList.remove("alert-success");
    alertDiv.classList.add("alert-danger");
    alertDiv.innerText = message;
    alertDiv.style.display = "block";

    // await sleep(4000);
    // alertDiv.style.opacity = 0;
    // alertDiv.addEventListener('transitionend', () => {
    //     alertDiv.style.display = 'none';
    //     alertDiv.style.opacity = 1;
    // });
}



getEmailBtn.addEventListener("click", getEmailInfo2);
copyEmailBtn.addEventListener('click', copyEmail);
refreshNameBtn.addEventListener('click', generateTwoName);