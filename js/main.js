const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const addHabit = document.querySelector("#header-section button")

addHabit.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
	//A função toLocaleDateString("pt-br") fara com que a data seja convertida para o padrão brasileiro.
	const today = new Date().toLocaleDateString("pt-bt").slice(0, -5)
	//A funcionalidade slice serve em todo o tipo de string, ele serve para recortar parte do texto.
	const dayExists = nlwSetup.dayExists(today)

	if (dayExists) {
		swal("", "Esse dia ja existe no seu habits", "error")
		return
	}
	nlwSetup.addDay(today)
}

function save() {
	// O locastorage ira guardar dentro da memória a mudanças feitas na aplicação.
	localStorage.setItem("habitsData", JSON.stringify(nlwSetup.data))
	//A função JSON.stringify() ira pegar todos os dados adicionados dentro dela e converter-los para o tipo string.
}

const data = JSON.parse(localStorage.getItem("habitsData")) || {}
//O objeto JSON.parse ira transformar de volta aquilo que era string em objeto.

nlwSetup.setData(data)
nlwSetup.load()
