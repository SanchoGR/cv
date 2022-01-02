console.group('ru');
	console.groupCollapsed('Привет! Баллы за задание (самостоятельный подсчет):');
		console.log('1. Cтудент засабмитил в rs app ссылку на своё CV, задеплоенное на gh-pages.', 10);
		console.log('2. Вёрстка валидная.', 10);
		console.group('3. Вёрстка семантическая.', 'Сумма баллов:', 20);
			console.log('В коде странице присутствуют и используются по назначению следующие элементы:');
			console.log('3.1. Элемент header, main, footer +', 5);
			console.log('3.2. Элемент nav +', 5);
			console.log('3.3. Только один заголовок h1 +', 5);
			console.log('3.4. Заголовки h2 +', 5);
		console.groupEnd()
		console.log('4. В footer есть ссылка на гитхаб автора работы, год создания приложения, логотип курса со ссылкой на курс.', 10);
		console.log('5. Для оформления СV используются css-стили.', 10);
		console.log('6. При уменьшении масштаба страницы браузера вёрстка размещается по центру по горизонтали.', 10);
		console.log('7. На странице СV есть фото или аватарка автора, пропорции изображения не искажены, у изображения есть атрибут alt.', 10);
		console.log('8. Навигация, контакты для связи и перечень навыков оформлены в виде списка ul > li или ul > li > a.', 10);
		console.group('9. Содержание CV.', 'Сумма баллов:', 30);
			console.log('CV содержит:');
			console.log('9.1. Краткую информацию о себе +', 5);
			console.log('9.2. Контакты для связи +', 5);
			console.log('9.3. Перечень навыков +', 5);
			console.log('9.4. Пример кода (код добавлен при помощи символов и тегов, а не картинкой) +', 5);
			console.log('9.5. Перечень выполненных учебных проектов со ссылками на исходный код или страницу приложения +', 5);
			console.log('9.6. Информацию об образовании и уровне английского +', 5);
		console.groupEnd()
		console.log('10. CV выполнено на английском языке.', 10);
		console.log('Сумма баллов за пункты 1–10:', 130);
		console.log('Спасибо, что нашли время проверить работу! Хорошего дня!');
	console.groupEnd();
console.groupEnd();

console.group('en');
	console.groupCollapsed('Hello! Points for the task (self-scoring):');
		console.log('1. The student submited a link to his CV, uploaded to gh-pages, in the rs app.', 10);
		console.log('2. The layout is valid.', 10);
		console.group('3. Semantic layout.', 'Total points:', 20);
			console.log('The following elements are present in the page code and are used for their intended purpose:');
			console.log('3.1. header, main, footer elements +', 5);
			console.log('3.2. nav element +', 5);
			console.log('3.3. Only one headline h1 +', 5);
			console.log('3.4. h2 headlines +', 5);
		console.groupEnd()
		console.log('4. The footer contains a link to the author\'s github, the year the application was created, the course logo with a link to the course.', 10);
		console.log('5. For the design of CV used css-styles.', 10);
		console.log('6. When the browser page is scaled down, the layout is centered horizontally.', 10);
		console.log('7. On the CV page there is a photo or avatar of the author, the proportions of the image are not distorted, the image has an alt attribute.', 10);
		console.log('8. Navigation, contacts and a list of skills are formatted as a list ul> li or ul> li> a.', 10);
		console.group('9. CV content.', 'Total points:', 30);
			console.log('CV contains:');
			console.log('9.1. Brief information about yourself +', 5);
			console.log('9.2. Contacts for communication +', 5);
			console.log('9.3. List of skills +', 5);
			console.log('9.4. Example code (code added using symbols and tags, not a picture) +', 5);
			console.log('9.5. List of completed tutorial projects with links to source code or application page +', 5);
			console.log('9.6. Information about education and level of English +', 5);
		console.groupEnd()
		console.log('10. CV is in English.', 10);
		console.log('Total points for items 1-10:', 130);
		console.log('Thank you for taking the time to check the work! Have a good day!');
	console.groupEnd();
console.groupEnd();

