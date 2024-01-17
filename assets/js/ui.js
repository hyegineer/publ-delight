/*
=============================================
폼양식 관련 js
=============================================
*/

// 1. 글자수 세기 input + 버튼 묶음
$('[data-unit-inp]').on('focus', function () {
  $(this).parents('.form-inp-unit-item').addClass('active');
}).on('blur', function () {
  $(this).parents('.form-inp-unit-item').removeClass('active');
})

// 2. 글자수 세기 input
$('[data-count-inp]').on('keyup', function () {
  let content = $(this).val();
  let maxlength = $(this).attr('maxlength');

  // 글자수 세기
  if (content.length == 0 || content == '') {
    $(this).siblings('.unit').children('.unit-count').text('0');
  } else {
    $(this).siblings('.unit').children('.unit-count').text(content.length);
  }

  // 글자수 제한
  if (content.length > maxlength) {
    $(this).val($(this).val().substring(0, maxlength));
    alert(`글자수는 ${maxlength}자까지 입력 가능합니다.`);
    $(this).siblings('.unit').children('.unit-count').text(maxlength);
  };
})

// 3. 자동 높이 조절되는 텍스트에어리어
$('textarea[data-autoresize]').each(function () {
  var offset = this.offsetHeight - this.clientHeight;

  var resizeTextarea = function (el) {
    $(el).css('height', 'auto').css('height', el.scrollHeight + offset);
  };

  $(this).on('keyup input', function () { resizeTextarea(this); }).removeAttr('data-autoresize');
})

// 4. 댓글 작성 시 비밀글 체크 동작
$('#secret-mode').on('change', function () {
  if ($(this).is(':checked')) {
    $(this).siblings('.secret-mode-txt').addClass('active');
    $(this).siblings('.secret-mode-txt').html('비밀댓글 작성');
    $(this).parents('.create-top').siblings('.create-bottom').children('.create-inp-unit-item').addClass('active');
  } else {
    $(this).siblings('.secret-mode-txt').removeClass('active');
    $(this).siblings('.secret-mode-txt').html('댓글 작성');
    $(this).parents('.create-top').siblings('.create-bottom').children('.create-inp-unit-item').removeClass('active');
  }
})

// 5. 커스텀 셀렉박스 동작
$('[data-opt-btn]').on('click', function () {
  var optValue = $(this).children('.txt')[0].innerHTML;
  var content = $(this).attr('data-opt-btn');
  var optParent = $(this).parents('.l-bottom-sheet').attr('id');

  closeModal(optParent);
  $(`[data-custom-select="${content}"]`).html(optValue);

  $(`#${optParent} [data-opt-btn]`).removeClass('active');
  $(this).addClass('active');
})

// 6. 보더 인풋 그룹 효과
$('[data-border-inp]').on('focus', function () {
  $(this).parent('.border-inp-unit-item').addClass('active');
})

$('[data-border-inp]').on('blur', function () {
  $(this).parent('.border-inp-unit-item').removeClass('active');
})

/*
=============================================
모달창 열고 닫기
=============================================
*/

// 1. 모달 열기
function openModal(id) {
  if ($('#' + id).hasClass('hide')) {
    $('#' + id).removeClass('hide');
  }

  $('#' + id).addClass('show');
}

// 1. 모달 닫기
function closeModal(id) {
  $('#' + id).addClass('hide');
}
/*
=============================================
탭버튼 동작
=============================================
*/

$('[data-tab-btn]').on('click', function () {
  var tabContent = $(this).attr('data-tab-btn');
  var btns = $(this).parent('[data-tab-btns]').attr('data-tab-btns');
  var contents = $(this).parent('[data-tab-btns]').siblings('[data-tab-contents]').attr('data-tab-contents');

  $(`[data-tab-contents="${contents}"] > .tabs-content`).removeClass('active');
  $(`#${tabContent}`).addClass('active');

  $(`[data-tab-btns="${btns}"] [data-tab-btn]`).removeClass('active');
  $(this).addClass('active');
})
/*
=============================================
기타 동작
=============================================
*/

// 1. 더보기 박스
$('.more-box-btn').on('click', function () {
  $(this).siblings('.more-box-content').toggleClass('active');
  $(this).toggleClass('active');
})

// 2. 댓글 작성 / 채팅창 내용 입력 시 이모티콘 선택하면 나타나는 동작
$('#chat-emoticon-choice').on('change', function () {
  if ($(this).prop('checked')) {
    $(this).parents('.create-container').siblings('.emoticon-container').addClass('active');
  } else {
    $(this).parents('.create-container').siblings('.emoticon-container').removeClass('active');
  }
})

// 3. 채팅 초대시 멤버영역 누르면 체크되는 동작 
$('[data-user-checkbox]').on('click', function () {
  $(this).siblings('[type="checkbox"]').prop('checked', function () {
    return !$(this).prop('checked');
  });

  if ($(this).siblings('[type="checkbox"]').prop('checked')) {
    $(this).addClass('active');
  } else {
    $(this).removeClass('active');
  }
})

$('[data-user-checkbox]').siblings('[type="checkbox"]').on('change', function () {
  if ($(this).prop('checked')) {
    $(this).siblings('[data-user-checkbox]').addClass('active');
  } else {
    $(this).siblings('[data-user-checkbox]').removeClass('active');
  }
})