import { Button } from "flowbite-react";
import { Navbar2 } from "./components/navbar/Navbar2";
import { Table1 } from "./components/tables/Table1";
import { Table2 } from "./components/tables/Table2";
import { Form1 } from "./components/form/Form1";
import { File1 } from "./components/File";
export default function App() {
  return (
    <div>
      <Navbar2 />
      <h1>You are welcome to Flow bite site</h1>
      <Button>Click me</Button>
      <div>
        <Table1 />
      </div>
      <div>
        <Table2 />
      </div>
      <div>
        <Form1 />
      </div>
      <div>
        <File1 />
      </div>
    </div>
  );
}
