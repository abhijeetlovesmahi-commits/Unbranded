// BRANDING CONFIGURATION
const SCHOOL_CONFIG = {
    name: "THE LALIT INTERNATIONAL",
    logo: "logo.png",
    session: "2025-26"
};

function initMenu() {
    // 1. Get User Role from localStorage (set after login)
    const userRole = localStorage.getItem('userRole') || 'guest'; // admin, account, faculty, student

    const menuData = [
        { name: "Dashboard", icon: "fa-th-large", link: "index.html", roles: ['admin', 'account', 'faculty', 'student'] },
        { name: "Admission", icon: "fa-user-plus", link: "add-student.html", roles: ['admin'] },
        { name: "Registry", icon: "fa-users", link: "view-students.html", roles: ['admin', 'faculty'] },
        { name: "Fee Controller", icon: "fa-cog", link: "fee-master.html", roles: ['admin', 'account'] },
        { name: "Collect Fees", icon: "fa-money-bill-wave", link: "collect-fees.html", roles: ['account', 'admin'] },
        { name: "Marks Entry", icon: "fa-edit", link: "marks-entry.html", roles: ['faculty', 'admin'] },
        { name: "Attendance", icon: "fa-calendar-check", link: "attendance.html", roles: ['faculty', 'admin'] },
        { name: "My Profile", icon: "fa-user-graduate", link: "profile.html", roles: ['student'] },
        { name: "Logout", icon: "fa-sign-out-alt", link: "login.html", roles: ['admin', 'account', 'faculty', 'student'] }
    ];

    let sidebarHTML = `
        <div class="sidebar" id="sidebar">
            <div class="sidebar-header" style="text-align:center; padding: 20px; border-bottom: 1px solid rgba(255,255,255,0.1)">
                <img src="${SCHOOL_CONFIG.logo}" style="width: 80px; background:white; border-radius:50%; padding:5px; border: 2px solid var(--accent-color);">
                <h5 style="color:var(--accent-color); font-family:'Cinzel'; margin-top:10px; font-size:1rem;">${SCHOOL_CONFIG.name}</h5>
            </div>
            <nav class="nav-links">
    `;

    menuData.forEach(item => {
        if (item.roles.includes(userRole)) {
            sidebarHTML += `<a href="${item.link}" style="color:white; text-decoration:none; padding:15px 25px; display:flex; align-items:center; transition:0.3s; border-bottom:1px solid rgba(255,255,255,0.05);">
                <i class="fas ${item.icon}" style="margin-right:15px; width:20px; color:var(--accent-color);"></i>
                ${item.name}
            </a>`;
        }
    });

    sidebarHTML += `</nav></div>`;
    
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);
}

// Sidebar Hover Effect (CSS alternative)
document.addEventListener('DOMContentLoaded', initMenu);
