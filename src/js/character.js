/**
 * <Общее описание>
 * 
 * @param  {string} name - name of new instance
 * @param  {string} type - type of new instance, value of Bowman, Swordsman, Magician, Daemon, Undead, Zombie
 * 
 * @throws will throw an error if name length is not between 2 and 10 chars
 * @throws will throw an error if type is not in the required list 
 */ 
function Character(name, type) {
  this.name = name;
  this.type = type;
}
