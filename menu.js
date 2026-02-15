document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar no-print';
    
    // Sidebar Content with Role-based Access
    sidebar.innerHTML = `
        <div class="sidebar-header">
            <img src="logo.png" style="width:60px; background:#fff; border-radius:50%; padding:5px; border:2px solid var(--accent);">
            <h2>IMPERIAL SYSTEM</h2>
        </div>
        <ul class="sidebar-menu">
            <li><a href="index.html"><i class="fas fa-home"></i> <span>Dashboard</span></a></li>
            <li><a href="add-student.html"><i class="fas fa-user-plus"></i> <span>Admission</span></a></li>
            <li><a href="view-students.html"><i class="fas fa-users"></i> <span>Registry</span></a></li>
            <li><a href="fee-master.html"><i class="fas fa-cog"></i> <span>Fee Master</span></a></li>
            <li><a href="collect-fees.html"><i class="fas fa-money-bill-wave"></i> <span>Collect Fees</span></a></li>
            <li><a href="attendance.html"><i class="fas fa-calendar-check"></i> <span>Attendance</span></a></li>
            <li><a href="exam-master.html"><i class="fas fa-file-signature"></i> <span>Exam Master</span></a></li>
            <li><a href="marks-entry.html"><i class="fas fa-edit"></i> <span>Marks Entry</span></a></li>
            <li><a href="report-card.html"><i class="fas fa-print"></i> <span>Report Card</span></a></li>
            <li><a href="id-card.html"><i class="fas fa-id-card"></i> <span>ID Card</span></a></li>
            <li style="margin-top:30px;"><a href="login.html" onclick="localStorage.clear()"><i class="fas fa-sign-out-alt"></i> <span>Logout</span></a></li>
        </ul>
    `;
    
    // Inject into the wrapper
    const wrapper = document.querySelector('.wrapper');
    if(wrapper) {
        wrapper.insertBefore(sidebar, wrapper.firstChild);
    } else {
        document.body.insertAdjacentElement('afterbegin', sidebar);
    }
});
