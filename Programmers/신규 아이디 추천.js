function solution(new_id) {
  //step 1
  new_id = new_id.toLowerCase();
  //step 2
  new_id = new_id.replace(/[^\w-_.]/g, "");
  //step 3
  new_id = new_id.replace(/\.+/g, ".");
  //step 4
  new_id = new_id.replace(/^\.|\.$/, "");
  //step 5
  new_id = new_id.replace(/^$/, "a");
  //step 6
  new_id = new_id.substr(0, 15).replace(/\.$/, "");
  //step 7
  while (new_id.length <= 2) {
    new_id = new_id + new_id[new_id.length - 1];
  }
  /*
  new id = new_id.replace(/^(.)$/, '$1$1$1').replace(/^(.)(.)$/, '$1$2$2');
  */

  //console.log(new_id)
  return new_id;
}
