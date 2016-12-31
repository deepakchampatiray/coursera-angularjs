(function(){
  'use strict';

  var parent = {
    value : 'parentValue',
    obj: {
      objValue: 'parentObjValue'
    },
    walk: function(){
      console.log("Parent Walking");
    }
  };

  var child = Object.create(parent);
  console.log("CHILD - Child Value :", child.value);
  console.log("CHILD - Child Obj Value :", child.obj.objValue);
  console.log("PARENT - Parent Value :", parent.value);
  console.log("PARENT - Parent Obj Value :", parent.obj.objValue);
  console.log("Child : ", child);
  console.log("Parent : ", parent);

  console.log("*** Changed Child Object ***");
  child.value = "childValue";
  child.obj.objValue = "childObjValue";
  console.log("CHILD - Child Value :", child.value);
  console.log("CHILD - Child Obj Value :", child.obj.objValue);
  console.log("PARENT - Parent Value :", parent.value);
  console.log("PARENT - Parent Obj Value :", parent.obj.objValue);
  console.log("Child : ", child);
  console.log("Parent : ", parent);
})();
