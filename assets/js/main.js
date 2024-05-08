$(document).ready(function() {

    /*----------------------------Animations------------------*/

    //Intro animation

    gsap.from('.bg-hands-mobile img, .bg-hands-desktop img', { rotate: -35, duration: 1 });
    gsap.from('.page-intro', { opacity: 0, duration: 0.8, delay: 1 });
    gsap.from('.page-intro .hand-bottle', { y: 400, opacity: 0, duration: 1, delay: 1 });
    gsap.from('.page-intro .hand-finger', { y: 60, x: 60, opacity: 0, duration: 1, delay: 1 });
    gsap.from('.page-intro .title', { y: 100, opacity: 0, duration: 0.5, delay: 2 });
    gsap.from('.page-intro .text-middle', { y: 150, opacity: 0, duration: 0.5, delay: 2 });
    gsap.from('.page-intro .button-start', { y: 200, opacity: 0, duration: 0.5, delay: 2 });
    gsap.from('.page-intro .link-modal', { y: 250, opacity: 0, duration: 0.5, delay: 2 });



    function animateIntro2() {
        gsap.from('.page-intro2 .intro-image', {
            scale: 0.2,
            opacity: 0,
            ease: '',
            rotate: 40,
            duration: 1,
            delay: 0.2,
        });
        gsap.from('.page-intro2 .hand-finger', {
            x: 300,
            y: -500,
            opacity: 0,
            duration: 0.6,
            delay: 1,
            ease: 'power1.out',
        });
        gsap.from('.page-intro2 .intro-copy .text-middle', {
            y: 100,
            opacity: 0,
            duration: 0.8,
            delay: 1.2,
            ease: 'power2.out',
        });
        gsap.from('.page-intro2 .intro-copy .button-next', {
            y: 200,
            opacity: 0,
            duration: 0.8,
            delay: 1.2,
            ease: 'power2.out',
        });
    }

    function animateQuestion() {
        if (currentQuestion == 0) {
            gsap.from('.page-quiz .progress-bar-container', {
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out',
            });
            gsap.from('.page-quiz .hand-bottle', { opacity: 0, y: 200, duration: 0.8, delay: 0.4, });
        }
        
        gsap.from('.page-quiz .question', {
                opacity: 0,
                y: 50,
                duration: 0.8,
                delay: 1,
                ease: 'power2.out',
            });
            gsap.from('.answer[data=answer-a]', {
                opacity: 0,
                y: 100,
                duration: 0.8,
                delay: 1.2,
            });
            gsap.from('.answer[data=answer-b]', {
                opacity: 0,
                y: 200,
                duration: 0.8,
                delay: 1.2,
            }); 
            gsap.from('.answer[data=answer-c]', {
                opacity: 0,
                y: 300,
                duration: 0.8,
                delay: 1.2,
            });

        /*function oldAnimation() {
            gsap.from('.page-quiz .question', {
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
                ease: 'power2.out',
            });
            gsap.from('.answer[data=answer-a]', {
                opacity: 0,
                rotationX: 180,
                duration: 1,
            });
            gsap.from('.answer[data=answer-a] .answer-text', {
                opacity: 0,
                duration: 0.5,
                delay: 1
            });

            gsap.from('.answer[data=answer-b]', {
                opacity: 0,
                duration: 1,
                rotationX: 180,
                delay: 1
            });
            gsap.from('.answer[data=answer-b] .answer-text', {
                opacity: 0,
                duration: 1,
                delay: 2
            });
            gsap.from('.answer[data=answer-c] .answer-text', {
                opacity: 0,
                duration: 1,
                delay: 3
            });
            gsap.from('.answer[data=answer-c]', {
                opacity: 0,
                duration: 1,
                rotationX: 180,
                delay: 2
            });
        }*/
    }

    function animateEnd() {
        gsap.from('.page-result .image-container', {
            opacity: 0,
            duration: 0.5,
            delay: 0.5
        });
        gsap.from('.page-result .text-content .title', {
            opacity: 0,
            y: 100,
            duration: 0.5,
            delay: 1
        });
        gsap.from('.page-result .text-content .subtitle', {
            opacity: 0,
            duration: 0.5,
            delay: 1.5
        });
        gsap.from('.page-result .text-content .result', {
            opacity: 0,
            scale: 3,
            duration: 0.5,
            delay: 2
        });
        gsap.from('.page-result .text-content .text', {
            opacity: 0,
            x: '-100%',
            duration: 0.5,
            delay: 2
        });
    }

    /*----------------------------Global Var -----------------*/
    // Check if mobile

    var isMobile = window.innerWidth < 961;

    /*----------------------------Question Data ---------------*/

    var questions = [{
            question: "Question 1",
            answers: {
                a: {
                    response: 'Response a',
                    correct: true,
                    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.'
                },
                b: {
                    response: 'Response b',
                    correct: false,
                    info: ''
                },
                c: {
                    response: 'Response c',
                    correct: false,
                    info: ''
                },
            }
        },
        {
            question: "Question 2",
            answers: {
                a: {
                    response: 'Response a',
                    correct: false,
                    info: ''
                },
                b: {
                    response: 'Response b',
                    correct: false,
                    info: ''
                },
                c: {
                    response: 'Response c',
                    correct: true,
                    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.'
                },
            }
        },
        {
            question: "Question 3",
            answers: {
                a: {
                    response: 'Response a',
                    correct: true,
                    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit.'
                },
                b: {
                    response: 'Response b',
                    correct: false,
                    info: ''
                },
                c: {
                    response: 'Response c',
                    correct: false,
                    info: ''
                },
            }
        },
    ]

    /* -------------------------- Game Data Recording ---------*/
    var qtyQuestionToPlay = 3;
    var currentQuestion = 0;
    var success = 0;

    /* -------------------------- Quiz Components --------------*/

    var progressText = $('.progress-text')
    var progressBar = $('.progress')
    var questionText = $('.question-text')
    var answers = $('.answers .answer')
    var infoBtn = $('.answer-info-icon')
    var numberSuccess = $('.number-success')
    var numberQtyTotal = $('.number-qtyTotal')

    /*----------------------------Global Functions ---------------*/

    function openModal(content) {
        $('.modal-inner-text').html(content);
        $('.modal').addClass('open');
    }

    function updateProgress(i) {
        var progress = i + 1;
        progressBar.animate({ width: `${progress / qtyQuestionToPlay * 100}%` }, 500);
        progressText.text(`${progress } / ${qtyQuestionToPlay}`);

    }

    function loadNextQuestion() {
        if (currentQuestion < qtyQuestionToPlay) {
            updateProgress(currentQuestion);
            var question = questions[currentQuestion];
            $(".question-text").text(question.question);
            $(".answer").removeClass("answer-info");
            $(".answer-result").removeClass("answer-result-ok answer-result-fail");
            $(".answer-option").each(function(index) {
                // String.fromCharCode(97 + index) recoge las letras a, b, c en minuscula
                $(this).text(String.fromCharCode(97 + index));
                $(this).next(".answer-text").text(question.answers[String.fromCharCode(97 + index)].response);
            });
            $('.page-quiz .button-next').hide();
            animateQuestion();
        }
        else {
            showEnd();
        }
        unlockAnswers();
    }

    function unlockAnswers() {
        $('.answer').css('pointer-events', 'unset');

    }

    function lockAnswers() {
        $('.answer').css('pointer-events', 'none');
        $('.answer-info-icon').css('pointer-events', 'auto');
    }

    function checkAnswer(answer) {
        var question = questions[currentQuestion];
        var correctAnswer;

        // Busca la respuesta correcta
        for (var key in question.answers) {
            if (question.answers.hasOwnProperty(key)) {
                if (question.answers[key].correct) {
                    correctAnswer = key;
                    break;
                }
            }
        }
        //Activa la información adicional de la respuesta
        $(".answer[data=answer-" + correctAnswer + "]").addClass("answer-info");

        // Marca la respuesta correcta si no es la misma que la seleccionada por el usuario
        if (answer !== correctAnswer) {
            $(".answer[data=answer-" + correctAnswer + "] .answer-result").addClass("answer-result-ok");
        }

        // Marca la respuesta del usuario
        if (question.answers[answer].correct) {
            $(".answer[data=answer-" + answer + "] .answer-result").addClass("answer-result-ok");
            showHurra();
            success++;
        }
        else {
            $(".answer[data=answer-" + answer + "] .answer-result").addClass("answer-result-fail");
            showFail();
        }
        lockAnswers();
        currentQuestion++;
    }

    function showHurra() {
        if (isMobile) {
            gsap.fromTo('.page-quiz', { opacity: 0 }, { opacity: 1, delay: 2 });
        }
        else {
            gsap.fromTo('.page-quiz .hand-bottle', { opacity: 0, y: 300, duration: 0.2 }, { opacity: 1, y: 0, duration: 1, delay: 2, });
        }
        $('.page-hurra').addClass('open');

        setTimeout(function() {
            $('.page-hurra').removeClass('open');
        }, 2000)

    }

    function showFail() {
        if (isMobile) {
            gsap.fromTo('.page-quiz', { opacity: 0 }, { opacity: 1, delay: 2 });
        }
        else {
            gsap.fromTo('.page-quiz .hand-bottle', { opacity: 0, y: 300, duration: 0.2 }, { opacity: 1, y: 0, duration: 1, delay: 2, });
        }
        $('.page-fail').addClass('open');

        setTimeout(function() {
            $('.page-fail').removeClass('open');
        }, 2000)
    }

    function showEnd() {
        numberQtyTotal.text(qtyQuestionToPlay);
        numberSuccess.text(success);
        $('.page').hide();
        $('.page-result').show();
        animateEnd();
    }

    /*-------------------------- Click EVENTS -----------------------*/

    $('.modal-close').click(function() {
        $('.modal').removeClass('open');
    })

    $(".answer").click(function() {
        checkAnswer($(this).attr("data").slice(-1));
        $('.page-quiz .button-next').show();
    });

    $('.page-quiz .button-next').click(function() { loadNextQuestion() });

    infoBtn.click(function(event) {
        event.stopPropagation();
        var dataAnswer = $(this).attr("data").slice(-1);
        var content = `<h2 class="modal-inner-text-title">Informationen</h2><p class="modal-inner-text-text">${questions[currentQuestion].answers[dataAnswer].info}<p>`;
        openModal(content);
    })

    /*---------------------------- START APPLICATION----------------*/

    //Page intro Onboarding

    $('.page:not(.page-hurra, .page-fail, .page-base)').hide();
    $('.page-intro').show();

    // Click on legals
    var contentLegal = `<h2 class="modal-inner-text-title">Lorem Ipsum</h2>
                        <ol class="modal-inner-text-list">
                            <li class="modal-inner-text-list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lacus non augue vulputate accumsan. Integer tempus augue quis tristique maximus. Donec laoreet venenatis nisl eget tempor. In malesuada velit sem, sit amet rhoncus nulla suscipit ut. Pellentesque ullamcorper orci ac nulla tristique, at rutrum risus pulvinar. Sed faucibus sem urna, in laoreet risus porttitor non. Nullam auctor nulla eros, id posuere massa fermentum in.</li>
                            <li class="modal-inner-text-list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lacus non augue vulputate accumsan. Integer tempus augue quis tristique maximus. Donec laoreet venenatis nisl eget tempor. In malesuada velit sem, sit amet rhoncus nulla suscipit ut. Pellentesque ullamcorper orci ac nulla tristique, at rutrum risus pulvinar. Sed faucibus sem urna, in laoreet risus porttitor non. Nullam auctor nulla eros, id posuere massa fermentum in.</li>
                            <li class="modal-inner-text-list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac lacus non augue vulputate accumsan. Integer tempus augue quis tristique maximus. Donec laoreet venenatis nisl eget tempor. In malesuada velit sem, sit amet rhoncus nulla suscipit ut. Pellentesque ullamcorper orci ac nulla tristique, at rutrum risus pulvinar. Sed faucibus sem urna, in laoreet risus porttitor non. Nullam auctor nulla eros, id posuere massa fermentum in.</li>
                        </ol>`;

    $('.page-intro .link-modal').click(function() {
        openModal(contentLegal);
    })

    //Click on START
    $('.page-intro .button-start').click(function() {
        $('.page-intro').hide();
        $('.page-intro2').show();
        animateIntro2();
    })

    //Page intro2 Prize Teaser
    $('.page-intro2 .button-next').click(function() {
        loadNextQuestion();
        $('.page-intro2').hide();
        $('.page-quiz').show();
    })
});
