const margObject = (obj1,obj2) =>({
  ...obj1,...obj2
});


console.log(margObject({name:"anu",marks:90},{place:"deepu",hose_number:85}));