package toDo.restservice;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ToDoListController {

  private static final String template = "Hello, %s!";
  private final AtomicLong counter = new AtomicLong();

  @GetMapping("/to-do-list")
  public ToDoList toDoList(@RequestParam(value = "name", defaultValue = "World") String name) {
    return new ToDoList(counter.incrementAndGet(), String.format(template, name));
  }
}
