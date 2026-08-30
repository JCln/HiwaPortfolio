users = () => {
    return [
        { imgSrc: 'assets/img/team/CTO.jpg', title: 'اصغر غریبی', position: 'Founder', linkedIn: '' },
        { imgSrc: 'assets/img/team/back.jpg', title: 'سپهر', position: 'Principal Full-stack Developer', linkedIn: 'https://www.linkedin.com/in/sepehr-shamsaii-21668884/' },
        { imgSrc: 'assets/img/team/front.jpg', title: 'محمد', position: 'Senior Front-End Developer', linkedIn: 'https://www.linkedin.com/in/mohamad-gharibi/' },
        { imgSrc: 'assets/img/team/womanuser.jpg', title: 'خانم اتحادی', position: 'Back-End Developer', linkedIn: 'https://www.linkedin.com/in/zahra-etehadi-080982312/' },
        { imgSrc: 'assets/img/team/matin.png', title: 'متین', position: 'Android (Kotlin) Developer', linkedIn: 'https://www.linkedin.com/in/matin-analo-0b97b1337/' },        
        { imgSrc: 'assets/img/team/reza.jpg', title: 'رضا', position: 'Front-End Developer', linkedIn: 'https://www.linkedin.com/in/reza-kiani-b6272839b/' },
        { imgSrc: 'assets/img/team/Designer.jpg', title: 'مریم', position: 'Designer', linkedIn: '' },
        { imgSrc: 'assets/img/team/womanuser.jpg', title: 'نیلوفر', position: 'Consulter', linkedIn: '' },    
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
                            <a href=${linkedIn} target="_blank">
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
        const div = document.getElementById('members');
        if (!div) return;

        const teamMembers = users();

        for (let index = 0; index < teamMembers.length; index++) {
            let teamMember = teamMembers[index];
            let newMemberElement = getTeamMemberHtml(teamMember.imgSrc, teamMember.title, teamMember.position, teamMember.linkedIn);
            div.insertAdjacentHTML('beforeend', newMemberElement);
        }
    }
})(window, document, undefined);   