package toDo.restservice;

public class ToDoList {

  private final long id;
  private final String item_name;

  public ToDoList(long id, String item_name) {
    this.id = id;
    this.item_name = item_name;
  }

  public long getId() {
    return id;
  }

  public String getItemName() {
    return item_name;
  }
}
