document.addEventListener("DOMContentLoaded", function () {
	document.querySelector(".animationLoader").style.display = "flex";
	document.querySelector(".cont_all").style.display = "none";
});

let sexoElegido = "";
let nacionElegida = "";
let TipoDocumento = "";

const selSex = document.querySelector(".selSex");
selectBtnSex = selSex.querySelector(".selBttnSex");
optionsSex = selSex.querySelector(".optionsSex");

const selNation = document.querySelector(".selNation");
selectBtnNation = selNation.querySelector(".selBttnNation");
optionsNation = selNation.querySelector(".optionsNation");

const selDocumentType = document.querySelector(".selDocumentType");
selectBtnDocumentType = selDocumentType.querySelector(".selBttnDocumentType");
optionsDocumentType = selDocumentType.querySelector(".optionsDocumentType");

const document_types = ["Cédula de Ciudadanía Colombiana", "Documento Extrajero"];
const sexs = ["Prefiero no decirlo", "Hombre", "Mujer", "No Binario"];
const nations = [
	"Colombia",
	"Estados Unidos",
	"México",
	"República Dominicana",
	"Panamá",
	"España",
	"Afganistán",
	"Albania",
	"Alemania",
	"Andorra",
	"Arabia Saudita",
	"Argentina",
	"Armenia",
	"Australia",
	"Austria",
	"Azerbaiyán",
	"Bahamas",
	"Bangladés",
	"Bélgica",
	"Bolivia",
	"Brasil",
	"Bulgaria",
	"Camboya",
	"Camerún",
	"Canadá",
	"Catar",
	"Chile",
	"China",
	"Chipre",
	"Ciudad del Vaticano",
	"Corea del Sur",
	"Costa de Marfil",
	"Costa Rica",
	"Croacia",
	"Cuba",
	"Dinamarca",
	"Ecuador",
	"Egipto",
	"El Salvador",
	"Emiratos Árabes Unidos",
	"Eslovaquia",
	"Eslovenia",
	"Estonia",
	"Filipinas",
	"Finlandia",
	"Francia",
	"Georgia",
	"Ghana",
	"Granada",
	"Grecia",
	"Guatemala",
	"Honduras",
	"Hungría",
	"India",
	"Indonesia",
	"Irak",
	"Irán",
	"Irlanda",
	"Islandia",
	"Israel",
	"Italia",
	"Jamaica",
	"Japón",
	"Jordania",
	"Kenia",
	"Lesoto",
	"Letonia",
	"Liechtenstein",
	"Lituania",
	"Luxemburgo",
	"Macedonia del Norte",
	"Malasia",
	"Marruecos",
	"Moldavia",
	"Mónaco",
	"Mongolia",
	"Montenegro",
	"Nicaragua",
	"Nigeria",
	"Noruega",
	"Nueva Zelanda",
	"Países Bajos",
	"Pakistán",
	"Palaos",
	"Paraguay",
	"Perú",
	"Polonia",
	"Portugal",
	"Reino Unido",
	"República Checa",
	"República Sudafricana",
	"Rumanía",
	"Rusia",
	"Senegal",
	"Serbia",
	"Singapur",
	"Siria",
	"Suecia",
	"Suiza",
	"Tailandia",
	"Túnez",
	"Turquía",
	"Ucrania",
	"Uruguay",
	"Venezuela",
];

function addDocumentType(selectDocumentType) {
	optionsDocumentType.innerHTML = "";
	document_types.forEach((document_type) => {
		let isSelected = document_type == selectDocumentType ? "selected" : "";
		let li = `<li onclick="updateNameDocumentType(this)" class="${isSelected}">${document_type}</li>`;
		optionsDocumentType.insertAdjacentHTML("beforeend", li);
	});
}

function addSex(selectsex) {
	optionsSex.innerHTML = "";
	sexs.forEach((sex) => {
		let isSelected = sex == selectsex ? "selected" : "";
		let li = `<li onclick="updateNameSex(this)" class="${isSelected}">${sex}</li>`;
		optionsSex.insertAdjacentHTML("beforeend", li);
	});
}

function addNation(selectnation) {
	optionsNation.innerHTML = "";
	nations.forEach((nation) => {
		let isSelected = nation == selectnation ? "selected" : "";
		let li = `<li onclick="updateNameNation(this)" class="${isSelected}">${nation}</li>`;
		optionsNation.insertAdjacentHTML("beforeend", li);
	});
}

addSex();
addNation();
addDocumentType();

function updateNameSex(selectedLi) {
	addSex(selectedLi.innerText);
	selSex.classList.remove("active");
	selectBtnSex.firstElementChild.innerText = selectedLi.innerText;
	sexoElegido = selectedLi.innerText;
}

function updateNameNation(selectedLi) {
	addNation(selectedLi.innerText);
	selNation.classList.remove("active");
	selectBtnNation.firstElementChild.innerText = selectedLi.innerText;
	nacionElegida = selectedLi.innerText;
}

function updateNameDocumentType(selectedLi) {
	addDocumentType(selectedLi.innerText);
	selDocumentType.classList.remove("active");
	selectBtnDocumentType.firstElementChild.innerText = selectedLi.innerText;
	TipoDocumento = selectedLi.innerText;
}

selectBtnSex.addEventListener("click", () => selSex.classList.toggle("active"));
selectBtnNation.addEventListener("click", () => selNation.classList.toggle("active"));
selectBtnDocumentType.addEventListener("click", () => selDocumentType.classList.toggle("active"));
let progress1 = document.querySelector(".progress1");
let progress2 = document.querySelector(".progress2");
let progress3 = document.querySelector(".progress3");


window.addEventListener("load", function () {
	document.getElementById("inputDocumentExpedition").type = "text";
	document.getElementById("inputDocumentExpedition").addEventListener("blur", function () {
		document.getElementById("inputDocumentExpedition").type = "text";
	});

	document.getElementById("inputDocumentExpedition").addEventListener("focus", function () {
		document.getElementById("inputDocumentExpedition").type = "date";
	});

	document.getElementById("inputBirthDate").type = "text";
	document.getElementById("inputBirthDate").addEventListener("blur", function () {
		document.getElementById("inputBirthDate").type = "text";
	});

	document.getElementById("inputBirthDate").addEventListener("focus", function () {
		document.getElementById("inputBirthDate").type = "date";
	});

	document.querySelector(".cont_all").style.display = "block";
	const animation = document.querySelector(".animationLoader");
	animation.style.display = "none";

	let controlbttn = 1;
	const bttnNext = document.getElementById("bttnNext");
	const bttnReturn = document.getElementById("bttnReturn");

	setTimeout(function(){
		progress1.style.width = "30%";
	}, 500)


	bttnNext.addEventListener("click", function () {
		if (controlbttn == 1) {
            let dataDocumentType = TipoDocumento;
            let dataNation = nacionElegida;

			const requiredFields = [
				{id: "inputDocumentNumber"},
				{id: "inputDocumentExpedition"},
				{id: "inputFirstName"},
				{id: "inputLastName"},
				{id: "inputBirthDate"}
			];

			let allFieldsValid = true;
			requiredFields.forEach((valor) => {
				let input;
				if (valor.id) {
					input = document.getElementById(valor.id);
				};
				if (input && !input.value) {
					allFieldsValid = false;
					input.style.borderColor = "red";
					input.addEventListener("click", function () {
						input.style.borderColor = "";
					});
				}
			});

			if (!allFieldsValid || !dataDocumentType || !dataNation) {
				if (!dataDocumentType) {
					iptBttnDocumentType = document.querySelector(".selBttnDocumentType");
					iptBttnDocumentType.style.borderColor = "red";
	
					iptBttnDocumentType.addEventListener("click", function () {
						iptBttnDocumentType.style.borderColor = "";
					});
				}
				if (!dataNation) {
					iptBttnNation = document.querySelector(".selBttnNation");
					iptBttnNation.style.borderColor = "red";
	
					iptBttnNation.addEventListener("click", function () {
						iptBttnNation.style.borderColor = "";
					});
				};

				// Función para manejar la creacion y cierre de las notificaciones
				const agregarNotificacion = ({ tipo, titulo, descripcion, autoCierre }) => {
					// Se crea la nuevo notificacion
					const nuevaNotificacion = document.createElement('div');
				
					// Se agrega las clases
					nuevaNotificacion.classList.add('notificacion');
					nuevaNotificacion.classList.add(tipo);
					if (autoCierre) nuevaNotificacion.classList.add('autoCierre');
				
					// Se agrega id de la notificacion
					const numeroAzar = Math.floor(Math.random() * 100);
					const fecha = Date.now();
					const NotificacionId = fecha + numeroAzar;
					nuevaNotificacion.id = NotificacionId;
				
					const iconos = {
						warning: 
							`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
								<path
									d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
								/>
							</svg>`,
					};
				
					// Aqui se crea la plantilla de la notificacion
					const notificacion = `
						<div class="contenido">
							<div class="icono">
								${iconos[tipo]}
							</div>
							<div class="texto">
								<p class="titulo">${titulo}</p>
								<p class="descripcion">${descripcion}</p>
							</div>
						</div>
						<button class="btt-cerrarNotificacion">
							<div class="icono">
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
									<path
										d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
									/>
								</svg>
							</div>
						</button>
					`;
				
					// Aqui se agrega la plantilla html
					nuevaNotificacion.innerHTML = notificacion;
				
					// Aqui se agrega la nueva notificacion al contenedor
					cont_notification.appendChild(nuevaNotificacion);
				
					// Función para menajera el cierre del notificacion
					const AnimacionCierre = (e) => {
						if (e.animationName === 'cierre') {
							nuevaNotificacion.removeEventListener('animationend', AnimacionCierre);
							nuevaNotificacion.remove();
						}
					};
				
					if (autoCierre) {
						setTimeout(() => cerrarNotificacion(NotificacionId), 4000);
					}
				
					// Aqui se detecta cuando se cierra la animacion
					nuevaNotificacion.addEventListener('animationend', AnimacionCierre);
				};

				const cont_notification = document.getElementById("cont_notification");
			
				agregarNotificacion({ tipo: 'warning', titulo: 'Atención', descripcion: '¡Complete todos los campos requeridos para continuar!', autoCierre: true});

				// Función para cerrar la notificacion
				const cerrarNotificacion = (id) => {
					document.getElementById(id)?.classList.add('cerrando');
				};
				
				// Aqui se detecta el click o la interaccion con las notificaciones
				cont_notification.addEventListener('click', (e) => {
					const NotificacionId = e.target.closest('div.notificacion').id;
				
					if (e.target.closest('button.btt-cerrarNotificacion')) {
						cerrarNotificacion(NotificacionId);
					}
				});

			} else {
				animation.style.display = "flex";
				document.querySelector(".cont_all").style.display = "none";
				setTimeout(function () {
					document.querySelector(".animationLoader").style.display = "none";
					document.querySelector(".cont_all").style.display = "block";
				}, 3000);

				document.querySelector(".pageRequiredInputs1").style.display = "none";
				document.querySelector(".pageRequiredInputs2").style.display = "block";
				document.getElementById("requiredInfo1").style.display = "none";
				document.getElementById("requiredInfo2").style.display = "block";
				document.querySelector(".contProgress1").style.display = "none";
				document.querySelector(".contProgress2").style.display = "block";
				progress2.style.width = "30%";
				setTimeout(function(){
					progress2.style.width = "60%";
				},4000);
				controlbttn = 2;
			};
		} else if (controlbttn == 2) {
			let dataEmail = document.getElementById("inputEmail").value;
			let dataCountry = document.getElementById("inputExtNumber").value;
			let dataPhoneNumber = document.getElementById("inputPhoneNumber").value;

			if (!dataEmail || !dataCountry || !dataPhoneNumber) {
				if (!dataEmail) {
					iptBttnEmail = document.getElementById("inputEmail")
					iptBttnEmail.style.borderColor = "red";

					iptBttnEmail.addEventListener("click", function(){
						iptBttnEmail.style.borderColor = "";
					});
				};
				if (!dataCountry) {
					iptBttnCountry = document.getElementById("inputExtNumber");
					iptBttnCountry.style.borderColor = "red";

					iptBttnCountry.addEventListener("click", function(){
						iptBttnCountry.style.borderColor = "";
					});
				};
				if (!dataPhoneNumber) {
					iptBttnPhoneNumber = document.getElementById("inputPhoneNumber");
					iptBttnPhoneNumber.style.borderColor = "red";

					iptBttnPhoneNumber.addEventListener("click", function(){
						iptBttnPhoneNumber.style.borderColor = "";
					});
				};
				// Función para manejar la creacion y cierre de las notificaciones
				const agregarNotificacion = ({ tipo, titulo, descripcion, autoCierre }) => {
					// Se crea la nuevo notificacion
					const nuevaNotificacion = document.createElement('div');
				
					// Se agrega las clases
					nuevaNotificacion.classList.add('notificacion');
					nuevaNotificacion.classList.add(tipo);
					if (autoCierre) nuevaNotificacion.classList.add('autoCierre');
				
					// Se agrega id de la notificacion
					const numeroAzar = Math.floor(Math.random() * 100);
					const fecha = Date.now();
					const NotificacionId = fecha + numeroAzar;
					nuevaNotificacion.id = NotificacionId;
				
					const iconos = {
						warning: 
							`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
								<path
									d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
								/>
							</svg>`,
					};
				
					// Aqui se crea la plantilla de la notificacion
					const notificacion = `
						<div class="contenido">
							<div class="icono">
								${iconos[tipo]}
							</div>
							<div class="texto">
								<p class="titulo">${titulo}</p>
								<p class="descripcion">${descripcion}</p>
							</div>
						</div>
						<button class="btt-cerrarNotificacion">
							<div class="icono">
								<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
									<path
										d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
									/>
								</svg>
							</div>
						</button>
					`;
				
					// Aqui se agrega la plantilla html
					nuevaNotificacion.innerHTML = notificacion;
				
					// Aqui se agrega la nueva notificacion al contenedor
					cont_notification.appendChild(nuevaNotificacion);
				
					// Función para menajera el cierre del notificacion
					const AnimacionCierre = (e) => {
						if (e.animationName === 'cierre') {
							nuevaNotificacion.removeEventListener('animationend', AnimacionCierre);
							nuevaNotificacion.remove();
						}
					};
				
					if (autoCierre) {
						setTimeout(() => cerrarNotificacion(NotificacionId), 4000);
					}
				
					// Aqui se detecta cuando se cierra la animacion
					nuevaNotificacion.addEventListener('animationend', AnimacionCierre);
				};

				const cont_notification = document.getElementById("cont_notification");
			
				agregarNotificacion({ tipo: 'warning', titulo: 'Atención', descripcion: '¡Complete todos los campos requeridos para continuar!', autoCierre: true});

				// Función para cerrar la notificacion
				const cerrarNotificacion = (id) => {
					document.getElementById(id)?.classList.add('cerrando');
				};
				
				// Aqui se detecta el click o la interaccion con las notificaciones
				cont_notification.addEventListener('click', (e) => {
					const NotificacionId = e.target.closest('div.notificacion').id;
				
					if (e.target.closest('button.btt-cerrarNotificacion')) {
						cerrarNotificacion(NotificacionId);
					}
				});

			} else {
				animation.style.display = "flex";
				document.querySelector(".cont_all").style.display = "none";
				setTimeout(function () {
					document.querySelector(".animationLoader").style.display = "none";
					document.querySelector(".cont_all").style.display = "block";
				}, 3000);

				document.querySelector(".pageRequiredInputs2").style.display = "none";
				document.querySelector(".pageRequiredInputs3").style.display = "block";
				document.getElementById("requiredInfo2").style.display = "none";
				document.getElementById("requiredInfo3").style.display = "block";
				document.querySelector(".contProgress2").style.display = "none";
				document.querySelector(".contProgress3").style.display = "block";
				document.getElementById("bttnNext").innerHTML = "Finalizar";
				progress3.style.width = "60%";
				setTimeout(function(){
					progress3.style.width = "90%";
				},4000);

				controlbttn = 3;
			}
		} else if (controlbttn == 3) {
			let dataPass = document.getElementById("inputPass").value;
			let dataConfirmPass = document.getElementById("inputConfirmPass").value;

			if ((dataPass != dataConfirmPass) || (!dataPass || !dataConfirmPass)){
				if (dataPass != dataConfirmPass){
					iptBttnConfirmPass = document.getElementById("inputConfirmPass");
					iptBttnConfirmPass.style.borderColor = "red";
					iptBttnConfirmPass.addEventListener("click", function(){
						iptBttnConfirmPass.style.borderColor = "";
					});
						// Función para manejar la creacion y cierre de las notificaciones
					const agregarNotificacion = ({ tipo, titulo, descripcion, autoCierre }) => {
						// Se crea la nuevo notificacion
						const nuevaNotificacion = document.createElement('div');
					
						// Se agrega las clases
						nuevaNotificacion.classList.add('notificacion');
						nuevaNotificacion.classList.add(tipo);
						if (autoCierre) nuevaNotificacion.classList.add('autoCierre');
					
						// Se agrega id de la notificacion
						const numeroAzar = Math.floor(Math.random() * 100);
						const fecha = Date.now();
						const NotificacionId = fecha + numeroAzar;
						nuevaNotificacion.id = NotificacionId;
					
						const iconos = {
							warning: 
								`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
									<path
										d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
									/>
								</svg>`,
						};
					
						// Aqui se crea la plantilla de la notificacion
						const notificacion = `
							<div class="contenido">
								<div class="icono">
									${iconos[tipo]}
								</div>
								<div class="texto">
									<p class="titulo">${titulo}</p>
									<p class="descripcion">${descripcion}</p>
								</div>
							</div>
							<button class="btt-cerrarNotificacion">
								<div class="icono">
									<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
										/>
									</svg>
								</div>
							</button>
						`;
					
						// Aqui se agrega la plantilla html
						nuevaNotificacion.innerHTML = notificacion;
					
						// Aqui se agrega la nueva notificacion al contenedor
						cont_notification.appendChild(nuevaNotificacion);
					
						// Función para menajera el cierre del notificacion
						const AnimacionCierre = (e) => {
							if (e.animationName === 'cierre') {
								nuevaNotificacion.removeEventListener('animationend', AnimacionCierre);
								nuevaNotificacion.remove();
							}
						};
					
						if (autoCierre) {
							setTimeout(() => cerrarNotificacion(NotificacionId), 4000);
						}
					
						// Aqui se detecta cuando se cierra la animacion
						nuevaNotificacion.addEventListener('animationend', AnimacionCierre);
					};
				
					const cont_notification = document.getElementById("cont_notification");
				
					agregarNotificacion({ tipo: 'warning', titulo: 'Atención', descripcion: '¡Las contrseñas no coinciden! Intentelo nuevamente', autoCierre: true});
				
					// Función para cerrar la notificacion
					const cerrarNotificacion = (id) => {
						document.getElementById(id)?.classList.add('cerrando');
					};
					
					// Aqui se detecta el click o la interaccion con las notificaciones
					cont_notification.addEventListener('click', (e) => {
						const NotificacionId = e.target.closest('div.notificacion').id;
					
						if (e.target.closest('button.btt-cerrarNotificacion')) {
							cerrarNotificacion(NotificacionId);
						}
					});
				};
				if (!dataConfirmPass || !dataPass){
					if (!dataPass) {
						iptBttnPass = document.getElementById("inputPass")
						iptBttnPass.style.borderColor = "red";
	
						iptBttnPass.addEventListener("click", function(){
							iptBttnPass.style.borderColor = "";
						});
					};
					if (!dataConfirmPass) {
						iptBttnConfirmPass = document.getElementById("inputConfirmPass");
						iptBttnConfirmPass.style.borderColor = "red";
	
						iptBttnConfirmPass.addEventListener("click", function(){
							iptBttnConfirmPass.style.borderColor = "";
						});
					};
	
					// Función para manejar la creacion y cierre de las notificaciones
					const agregarNotificacion = ({ tipo, titulo, descripcion, autoCierre }) => {
						// Se crea la nuevo notificacion
						const nuevaNotificacion = document.createElement('div');
					
						// Se agrega las clases
						nuevaNotificacion.classList.add('notificacion');
						nuevaNotificacion.classList.add(tipo);
						if (autoCierre) nuevaNotificacion.classList.add('autoCierre');
					
						// Se agrega id de la notificacion
						const numeroAzar = Math.floor(Math.random() * 100);
						const fecha = Date.now();
						const NotificacionId = fecha + numeroAzar;
						nuevaNotificacion.id = NotificacionId;
					
						const iconos = {
							warning: 
								`<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
									<path
										d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
									/>
								</svg>`,
						};
					
						// Aqui se crea la plantilla de la notificacion
						const notificacion = `
							<div class="contenido">
								<div class="icono">
									${iconos[tipo]}
								</div>
								<div class="texto">
									<p class="titulo">${titulo}</p>
									<p class="descripcion">${descripcion}</p>
								</div>
							</div>
							<button class="btt-cerrarNotificacion">
								<div class="icono">
									<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
										<path
											d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
										/>
									</svg>
								</div>
							</button>
						`;
					
						// Aqui se agrega la plantilla html
						nuevaNotificacion.innerHTML = notificacion;
					
						// Aqui se agrega la nueva notificacion al contenedor
						cont_notification.appendChild(nuevaNotificacion);
					
						// Función para menajera el cierre del notificacion
						const AnimacionCierre = (e) => {
							if (e.animationName === 'cierre') {
								nuevaNotificacion.removeEventListener('animationend', AnimacionCierre);
								nuevaNotificacion.remove();
							}
						};
					
						if (autoCierre) {
							setTimeout(() => cerrarNotificacion(NotificacionId), 4000);
						}
					
						// Aqui se detecta cuando se cierra la animacion
						nuevaNotificacion.addEventListener('animationend', AnimacionCierre);
					};
	
					const cont_notification = document.getElementById("cont_notification");
				
					agregarNotificacion({ tipo: 'warning', titulo: 'Atención', descripcion: '¡Complete todos los campos requeridos para continuar!', autoCierre: true});
	
					// Función para cerrar la notificacion
					const cerrarNotificacion = (id) => {
						document.getElementById(id)?.classList.add('cerrando');
					};
					
					// Aqui se detecta el click o la interaccion con las notificaciones
					cont_notification.addEventListener('click', (e) => {
						const NotificacionId = e.target.closest('div.notificacion').id;
					
						if (e.target.closest('button.btt-cerrarNotificacion')) {
							cerrarNotificacion(NotificacionId);
						}
					});
				} 
			} else {
				animation.style.display = "flex";
				document.querySelector(".cont_all").style.display = "none";
				setTimeout(function () {
					document.querySelector(".animationLoader").style.display = "none";
				}, 3000);

				controlbttn = 4;
			};
		};
	});


	bttnReturn.addEventListener("click", function(){
		if (controlbttn == 1){
			window.location.href = "/opRegister";
		}
		if (controlbttn == 2){
			animation.style.display = "flex";
			document.querySelector(".cont_all").style.display = "none";
			setTimeout(function () {
				document.querySelector(".animationLoader").style.display = "none";
				document.querySelector(".cont_all").style.display = "block";
			}, 3500);

			document.querySelector(".pageRequiredInputs1").style.display = "block";
			document.querySelector(".pageRequiredInputs2").style.display = "none";
			document.getElementById("requiredInfo1").style.display = "block";
			document.getElementById("requiredInfo2").style.display = "none";
			document.querySelector(".contProgress1").style.display = "block";
			document.querySelector(".contProgress2").style.display = "none";
			controlbttn = 1;
		}
		if (controlbttn == 3){
			animation.style.display = "flex";
			document.querySelector(".cont_all").style.display = "none";
			setTimeout(function () {
				document.querySelector(".animationLoader").style.display = "none";
				document.querySelector(".cont_all").style.display = "block";
			}, 3500);

			document.querySelector(".pageRequiredInputs2").style.display = "block";
			document.querySelector(".pageRequiredInputs3").style.display = "none";
			document.getElementById("requiredInfo2").style.display = "block";
			document.getElementById("requiredInfo3").style.display = "none";
			document.querySelector(".contProgress2").style.display = "block";
			document.querySelector(".contProgress3").style.display = "none";
			controlbttn = 2;
		};
	});

	if (controlbttn == 1){
		
	}; 
	if (controlbttn == 2){
		setTimeout(function(){
			progress2.style.width = "60%";
		}, 500)
	} ;
	if (controlbttn == 3){
		setTimeout(function(){
			progress3.style.width = "95%";
		}, 500)
	};
});
