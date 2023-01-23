const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
	run: ["01-26", "01-29", "01-30", "02-02", "02-03", "02-05", "02-07"],
	water: ["01-27", "01-28"],
	diet: ["02-06", "02-08"],
	sleep: ["02-01", "02-04"],
}

nlwSetup.setData(data)
nlwSetup.load()
