let a=prompt('a?','');
let b=prompt('b?','');
result=(a+b<4)?'below':'over';
if((a+b)<4){
    result='below';
    alert('below');
}else{
    result='over';
    alert('over')
}