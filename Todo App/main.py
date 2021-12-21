import eel
import logic.todo_controller

def main():
  eel.init('web') 
  eel.start('index.html', size=(650, 612), position=(0,0))

if __name__=="__main__":
    main()
