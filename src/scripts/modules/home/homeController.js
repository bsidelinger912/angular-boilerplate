function HomeController() {
	console.log('home controller');
  // ViewModel
  const vm = this;

  vm.title = 'Title';
  vm.hello = 'hello world, testing';

  vm.click = function(){
  	alert('click');
  };
}

export default HomeController;