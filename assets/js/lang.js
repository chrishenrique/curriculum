$(document).ready(function () {

	// Grab the template script
	theTemplateScript = $("#language-template").html();

	function changeSite(type = 'PT') {
		// Compile the template
		var theTemplate = Handlebars.compile(theTemplateScript);
		// Data for template
		var data = changeLanguage(type);
		// Add the compiled html to the page
		$('#template').html(theTemplate(data));
	}

	changeSite();

	function changeLanguage(type){
		type = type == 'EN';
		var data = {
			// header
			'singlename' : 'Christiano',
			'name' : 'Christiano Costa',
			'text_header' : type ? '' : 'Graduando Ciência da Computação na universidade FUMEC aos 27 anos, com conhecimentos avançados de lógica de programação e foco em desenvolver sistemas WEB, Moblile e desktop, análise de requisito, controle de atualizações e versões de sistemas e aplicações, teste automatizados, modelagem de banco de dados',

			// my contacts
			'my_contacts' : type ? 'My Contacts' : 'Meus Contatos',

			// academy
			'formation' : type ? '' : '',
			'acad_1' : type ? '' : '',
			'acad_2' : type ? '' : '',
			'acad_3' : type ? '' : '',

			// professional
			'professional' : type ? 'Professional Expiriences' : 'Experiências Profissionais',
			'wquarks' : type ? '' : '',
			'cidadeadm' : type ? '' : 'Estagiário – SEDESE-ctic Secretaria de estado de trabalho e desenvolvimento social.',
			'actual' : type ? 'Actual' : 'Atualmente',

			// qualifications
			'qualifications' : type ? 'Qualifications' : 'Qualificações',
			'english' : type ? 'English level medium.' : 'Inglês nível medio.',

			// realizations
			'realizations' : type ? 'Realizations' : 'Realizações',
			'real_1' : type ? '' : '',
			'real_2' : type ? '' : '',
			'real_3' : type ? '' : '',
			'real_4' : type ? '' : '',
			'real_5' : type ? '' : '',
			'real_6' : type ? '' : '',
			// footer
			'' : type ? '' : '',
			'' : type ? '' : '',

		};
		
			 // 'tres' : type == "EN" ? 'tree' : 'tres',
			 // "quatro" : type == "EN" ? 'four' : 'quatro',
		return data;
	}
		
	$("[name=changeLanguage]").click(function() {
		var type = $(this).val();
		if (type == 'EN'){
			$('#changeLanguageEN').removeClass( "notClicked" );
			$('#changeLanguagePT').addClass( "notClicked" );
		}else{
			$('#changeLanguagePT').removeClass( "notClicked" );
			$('#changeLanguageEN').addClass( "notClicked" );
		}
		changeSite(type);
	});


});