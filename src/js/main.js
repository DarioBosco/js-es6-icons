const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
	},
];

const colors = {
	animal: 'green',
	vegetable: 'orange',
	user: 'purple',
};

const iconsContainer = document.getElementById('main_container');
let selectedType;
document.getElementById('selectedIcons').addEventListener('change', function () {
	selectedType = this.value;
	selectedIcons = filterBySelectedType(icons, selectedType);

	switch (selectedType) {
		case 'animals':
			selectedType = 'animal';
			break;
		case 'vegetables':
			selectedType = 'vegetable';
			break;
		case 'users':
			selectedType = 'user';
			break;
		default:
			selectedType = 'all';
			break;
	}
	filterBySelectedType(icons, selectedType);
	printIcons(selectedIcons, iconsContainer);
});

printIcons(icons, iconsContainer);

//Functions
function printIcons(array, container) {
	container.innerHTML = '';
	array.forEach((element) => {
		const { type } = element;

		getColors(colors, element, type);

		const { name, prefix, family, color } = element;
		container.innerHTML += `
		<div class="icon">
			<i class="${family} ${prefix + name}" style="color: ${color}"></i>
			<div class="icon__name">${name}</div>
		</div>`;
	});
}

function getColors(colorsObj, targetObj, key) {
	const colorsList = Object.entries(colorsObj);
	colorsList.forEach((element) => {
		if (element[0] === key) {
			targetObj.color = element[1];
		}
	});
	return targetObj;
}

function filterBySelectedType(array, type) {
	const filteredArray = array.filter((element) => {
		if (element.type === type) {
			return true;
		} else if (type === 'all') {
			return array;
		}
		return false;
	});
	return filteredArray;
}
