const texts = ["싸피 13기", "99년생", "수학을 전공한"]; // 텍스트 배열
const typingElement = document.getElementById("typing");
let textIndex = 0; // 현재 텍스트 배열의 인덱스
let charIndex = 0; // 현재 텍스트의 글자 인덱스
let isDeleting = false; // 글자를 지우는 중인지 여부
const typingSpeed = 100; // 타이핑 속도
const deletingSpeed = 50; // 지우는 속도
const delayBetweenCycles = 1000; // 글자 다 입력 후 대기 시간

function type() {
  const currentText = texts[textIndex]; // 현재 텍스트 가져오기

  if (!isDeleting && charIndex < currentText.length) {
    // 글자 입력 중
    typingElement.textContent += currentText[charIndex];
    charIndex++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    // 글자 지우는 중
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(type, deletingSpeed);
  } else if (!isDeleting && charIndex === currentText.length) {
    // 글자 입력 완료 후 대기
    isDeleting = true;
    setTimeout(type, delayBetweenCycles);
  } else if (isDeleting && charIndex === 0) {
    // 글자 삭제 완료 후 다음 텍스트로 변경
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length; // 다음 텍스트로 이동, 순환
    setTimeout(type, typingSpeed);
  }
}

type();
