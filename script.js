document.addEventListener('DOMContentLoaded', function() {
    // 포스트 카드에 애니메이션 효과 추가
    const postCards = document.querySelectorAll('.post-card');
    
    // 각 카드에 애니메이션 효과 적용
    postCards.forEach((card, index) => {
        // 초기 상태 설정 (투명도 0, 아래에서 시작)
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // 시차를 두고 나타나는 애니메이션
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // 포스트 카드 호버 효과 강화
    postCards.forEach(card => {
        // 이미지 호버 시 확대 효과
        const postImg = card.querySelector('.post-img');
        if (postImg) {
            postImg.style.transition = 'transform 0.4s ease';
            
            card.addEventListener('mouseenter', () => {
                postImg.style.transform = 'scale(1.05)';
            });
            
            card.addEventListener('mouseleave', () => {
                postImg.style.transform = 'scale(1)';
            });
        }
        
        // '자세히 보기' 버튼 클릭 이벤트 - 외부 URL로 이동
        // HTML에서 이미 target="_blank"로 처리했으므로 여기서는 추가 기능이 필요 없음
        // 혹시 추가 기능을 원한다면 아래 코드를 활성화할 수 있음
        /*
        const readMoreBtn = card.querySelector('.read-more');
        if (readMoreBtn) {
            readMoreBtn.addEventListener('click', function(e) {
                // 기본 동작은 그대로 유지 (링크 이동)
                // 필요한 경우 추가 로직을 여기에 구현 (예: 클릭 분석 등)
                console.log('링크 클릭됨:', this.getAttribute('href'));
            });
        }
        */
    });
    
    // 모바일에서도 그리드가 제대로 표시되는지 확인
    window.addEventListener('resize', function() {
        console.log('화면 크기가 변경되었습니다. 현재 너비:', window.innerWidth);
    });
});