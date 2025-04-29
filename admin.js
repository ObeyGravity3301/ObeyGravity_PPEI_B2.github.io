document.addEventListener('DOMContentLoaded', () => {
    const members = document.querySelectorAll('.member-preview');
    members.forEach((member, index) => {
      member.addEventListener('mouseover', () => {
        if (index === 0) {
          members[0].classList.add('move-left');
          members[1].classList.add('move-right');
          members[2].classList.add('move-right');
        } else if (index === 1) {
          members[0].classList.add('move-left');
          members[1].classList.remove('move-left', 'move-right');
          members[2].classList.add('move-right');
        } else if (index === 2) {
          members[0].classList.add('move-left');
          members[1].classList.add('move-left');
          members[2].classList.add('move-right');
        }
      });
      member.addEventListener('mouseout', () => {
        members.forEach(m => {
          m.classList.remove('move-left', 'move-right');
        });
      });
    });
  });
  