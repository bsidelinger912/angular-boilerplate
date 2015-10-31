'use strict';

function ExampleDirective() {

  return {
    restrict: 'EA',
    link: (scope, element) => {
      element.on('click', () => {
        console.log('example directive');
      });
    }
  };

}

export default ExampleDirective;