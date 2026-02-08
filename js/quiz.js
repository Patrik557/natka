// Quiz logic
document.addEventListener('DOMContentLoaded', function() {
  const quizForm = document.getElementById('quiz-form');
  const quizResults = document.getElementById('quiz-results');
  const resultsMessage = document.getElementById('results-message');
  const tryAgainBtn = document.getElementById('try-again');
  const backToHomeBtn = document.getElementById('back-to-home');

  // Handle quiz submission
  if (quizForm) {
    quizForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Collect answers
      const answers = {
        q1: document.querySelector('input[name="q1"]').value.trim(),
        q2: document.querySelector('input[name="q2"]').value.trim(),
        q3: document.querySelector('input[name="q3"]').value.trim(),
        q4: document.querySelector('input[name="q4"]').value.trim(),
        q5: document.querySelector('input[name="q5"]').value.trim(),
        q6: document.querySelector('input[name="q6"]').value.trim()
      };
      
      // Check if all questions have been answered
      if (!answers.q1 || !answers.q2 || !answers.q3 || !answers.q4 || !answers.q5 || !answers.q6) {
        alert('Prosím odpověz na všechny otázky.');
        return;
      }
      
      // Show personalized message based on answers
      let message = '';
      
      // Different message combinations based on answers
      // Zpracování textové odpovědi na první otázku
      const dateAnswer = answers.q1.toLowerCase();
      
      if (dateAnswer.includes('červen') || dateAnswer.includes('cerven') || 
          dateAnswer.includes('june') || dateAnswer.includes('6') || 
          dateAnswer.includes('léto') || dateAnswer.includes('leto')) {
        message = 'Správně! Máš skvělou paměť na naše důležité momenty! ';
      } else {
        message = 'Hmmm, vzpomínáš si na ten den trochu jinak, než já. Ale to nevadí! ';
      }
      
      // Zpracování textové odpovědi na druhou otázku o vůni
      const scentAnswer = answers.q2.toLowerCase();
      
      if (scentAnswer.includes('parfém') || scentAnswer.includes('parfem') || 
          scentAnswer.includes('kolínská') || scentAnswer.includes('kolinska') || 
          scentAnswer.includes('voda') || scentAnswer.includes('cologne')) {
        message += 'A poznáváš mou vůni! To mě těší, že si všímáš těchto detailů. ';
      } else if (scentAnswer.includes('káva') || scentAnswer.includes('kava') ||
                scentAnswer.includes('coffee')) {
        message += 'Káva je opravdu něco, co máme oba rádi! Je krásné, že ti připomíná naše společné chvíle. ';
      } else {
        message += 'Zajímavá asociace s vůní! Je hezké, jak máme každý své jedinečné vnímání. ';
      }
      
      // Zpracování textové odpovědi na třetí otázku
      const loveAnswer = answers.q3.toLowerCase();
      
      if (loveAnswer.includes('oči') || loveAnswer.includes('oci') || 
          loveAnswer.includes('pohled') || loveAnswer.includes('úsměv') || 
          loveAnswer.includes('usmev') || loveAnswer.includes('tvář') || 
          loveAnswer.includes('tvar') || loveAnswer.includes('obličej') ||
          loveAnswer.includes('oblicej')) {
        message += 'A máš pravdu, tvá krása a hlavně tvé oči a úsměv mě okouzlují každý den! ';
      } else if (loveAnswer.includes('smysl pro humor') || loveAnswer.includes('smích') || 
                loveAnswer.includes('vtipná') || loveAnswer.includes('vtipna') || 
                loveAnswer.includes('humor') || loveAnswer.includes('smich')) {
        message += 'Přesně! Tvůj smysl pro humor a způsob, jakým se směješ, mě naprosto uchvátil. ';
      } else if (loveAnswer.includes('osobnost') || loveAnswer.includes('povaha') || 
                loveAnswer.includes('charakter') || loveAnswer.includes('jaká jsi') || 
                loveAnswer.includes('jaka jsi')) {
        message += 'Naprosto přesně! Tvá jedinečná osobnost je to, co mě k tobě nepřestává přitahovat. ';
      } else {
        message += 'To je krásná odpověď! Máš pravdu, je toho na tobě tolik, co miluji. ';
      }
      
      // Zpracování textové odpovědi na čtvrtou otázku
      const loveTimeAnswer = answers.q4.toLowerCase();
      
      if (loveTimeAnswer.includes('první') || loveTimeAnswer.includes('prvni') || 
          loveTimeAnswer.includes('začátek') || loveTimeAnswer.includes('zacatek') || 
          loveTimeAnswer.includes('hned') || loveTimeAnswer.includes('okamžitě') || 
          loveTimeAnswer.includes('okamzite')) {
        message += 'A to, že se do mě zamilovala hned, mě neskutečně těší! Já se do tebe zamiloval také od prvního momentu. ';
      } else if (loveTimeAnswer.includes('postupně') || loveTimeAnswer.includes('postupne') || 
                loveTimeAnswer.includes('časem') || loveTimeAnswer.includes('casem') || 
                loveTimeAnswer.includes('pomalu')) {
        message += 'Láska, která roste postupně, bývá často ta nejsilnější a nejhlubší. Jsem rád, že naše láska takto vyrostla. ';
      } else if (loveTimeAnswer.includes('datum') || loveTimeAnswer.includes('den') || 
                loveTimeAnswer.includes('měsíc') || loveTimeAnswer.includes('mesic') || 
                loveTimeAnswer.includes('rok')) {
        message += 'Ten den, kdy ses do mě zamilovala, je pro mě také velmi výjimečný a vždy si ho budu pamatovat. ';
      } else {
        message += 'Tvá odpověď o tom, kdy ses do mě zamilovala, je nádherná. Každý moment s tebou je pro mě vzácný. ';
      }

      // Zpracování odpovědi na pátou otázku o mazlení
      const cuddleAnswer = answers.q5.toLowerCase();
      
      if (cuddleAnswer.includes('ty') || cuddleAnswer.includes('tebe') || 
          cuddleAnswer.includes('miláček') || cuddleAnswer.includes('milacek')) {
        message += 'A máš pravdu, já jsem opravdu velký mazlík! Miluju když se můžu k tobě přitulit. ❤️ ';
      } else if (cuddleAnswer.includes('já') || cuddleAnswer.includes('ja') || 
                cuddleAnswer.includes('me') || cuddleAnswer.includes('mě')) {
        message += 'Hmm, ty že jsi větší mazlík? To si budeme muset porovnat! 💕 ';
      } else if (cuddleAnswer.includes('oba') || cuddleAnswer.includes('stejně') || 
                cuddleAnswer.includes('stejne') || cuddleAnswer.includes('společně') || 
                cuddleAnswer.includes('spolecne')) {
        message += 'To je pravda, oba dva jsme velcí mazlíci a to je na tom to nejkrásnější! ♥️ ';
      } else {
        message += 'Ať už je větší mazlík kdokoliv z nás, důležité je, že se máme rádi a užíváme si společné mazlení! 💝 ';
      }

      // Zpracování odpovědi na šestou otázku o IKEA
      const ikeaAnswer = answers.q6.toLowerCase();
      
      if (ikeaAnswer.includes('ty') || ikeaAnswer.includes('tebe')) {
        message += 'No tak s tím musím souhlasit, v IKEA bych se bez tebe asi ztratil mezi všemi těmi regály! 😄 ';
      } else if (ikeaAnswer.includes('já') || ikeaAnswer.includes('ja') || 
                ikeaAnswer.includes('me') || ikeaAnswer.includes('mě')) {
        message += 'Neboj, příště tě v IKEA budu držet pevně za ruku, ať se mi neztratíš! 😊 ';
      } else if (ikeaAnswer.includes('oba') || ikeaAnswer.includes('stejně') || 
                ikeaAnswer.includes('stejne')) {
        message += 'To je pravda, my dva v IKEA? To by mohl být zajímavý den plný hledání cesty ven! 😅 ';
      } else {
        message += 'V IKEA je někdy těžké se vyznat, ale spolu to vždycky nějak zvládneme! 😄 ';
      }

      // Add a sweet ending
      message += ' Děkuji ti za všechny naše společné chvíle. Jsi pro mě ta nejkrásnější a nejdůležitější osoba na světě a miluji každou část tebe. ❤️ Jsem šťastný, že tě mám.';
      
      // Display the results
      resultsMessage.textContent = message;
      quizForm.style.display = 'none';
      quizResults.classList.remove('hidden');
    });
  }
  
  // Try the quiz again
  if (tryAgainBtn) {
    tryAgainBtn.addEventListener('click', function() {
      // Reset form
      quizForm.reset();
      // Hide results and show form again
      quizResults.classList.add('hidden');
      quizForm.style.display = 'block';
    });
  }
  
  // Back to home button
  if (backToHomeBtn) {
    backToHomeBtn.addEventListener('click', function() {
      window.location.href = '1stranka.html';
    });
  }

  // Next page button
  const nextPageBtn = document.getElementById('next-page');
  if (nextPageBtn) {
    nextPageBtn.addEventListener('click', function() {
      window.location.href = 'stranku3.html';
    });
  }
});