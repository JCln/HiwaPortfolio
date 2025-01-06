users = () => {
    return [
        { imgSrc: 'assets/img/team/CTO.jpg', title: 'اصغر غریبی', position: 'Founder', linkedIn: '' },
        { imgSrc: 'assets/img/team/back.jpg', title: 'سپهر', position: 'Principal Full-stack Developer', linkedIn: 'https://www.linkedin.com/in/sepehr-shamsaii-21668884/' },
        { imgSrc: 'assets/img/team/Android.jpg', title: 'علی', position: 'Senior Android Developer', linkedIn: 'https://www.linkedin.com/in/iamalirostami/' },
        { imgSrc: 'assets/img/team/front.jpg', title: 'محمد', position: 'Senior Front-End Developer', linkedIn: 'https://www.linkedin.com/in/mohamad-gharibi/' },
        { imgSrc: 'assets/img/team/Designer.jpg', title: 'مریم', position: 'Designer', linkedIn: '' },
        { imgSrc: 'assets/img/team/womanuser.jpg', title: 'خانم محمدی', position: 'Accounter', linkedIn: '' },
        { imgSrc: 'assets/img/team/womanuser.jpg', title: 'نیلوفر', position: 'Consulter', linkedIn: '' },
        { imgSrc: 'assets/img/team/manuser.jpg', title: 'علی', position: 'Junior Back-End Developer', linkedIn: '' },
    ]
}

getTeamMemberHtml = (imgSrc, title, position, linkedIn) => {
    return `    
    <div class="col-lg-3">
        <div class="team-card mb-30 mb-lg-0 style-6">
            <div class="img">
                <img class="img-default" src="${imgSrc}" alt="">
                        <div class="social-icons">
                        ${linkedIn.length > 0 && linkedIn !== null ? `
                            <a href=${linkedIn}>
                                <i class="fab fa-linkedin-in"></i>
                            </a>`
            : ``}                        
                        </div>
            </div>
            <div class="info">
            <a class="d-block">
                <h6>${title}</h6>
            </a>
            <small>${position}</small>
            </div>
        </div>
    </div>                        
    `
}
(function (window, document, undefined) {

    // code that should be taken care of right away
    window.onload = initial;

    function initial() {
        const teamMembers = users();

        for (let index = 0; index < teamMembers.length; index++) {
            let teamMember = teamMembers[index];
            let newMemberElement = getTeamMemberHtml(teamMember.imgSrc, teamMember.title, teamMember.position, teamMember.linkedIn);
            let div = document.getElementById('members');
            div.insertAdjacentHTML('beforeend', newMemberElement);
        }
    }
})(window, document, undefined);   