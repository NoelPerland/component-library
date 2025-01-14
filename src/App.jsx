import Button from "./components/Button";
import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Card from "./components/Card";

import { FaStar, FaBell } from "react-icons/fa";

function App() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">React Components Demo</h1>

      {/*  <section>
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="space-x-4">
          <Button size="lg" color="green">
            Large Button
          </Button>
          <Button size="sm" color="red" disabled>
            Disabled Small Button
          </Button>
          <Button size="md" color="red">
            Medium Button
          </Button>
          <Button size="md" color="red">
            Medium Button
          </Button>
        </div>
      </section> */}

      <section>
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="space-x-4">
          <Button size="lg" color="green" label="Large Button" />
          <Button
            size="sm"
            color="red"
            label="Disabled Small Button"
            disabled
          />{" "}
          <Button size="md" color="red" label="Medium Button">
            Medium Button
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
        <Alert color="yellow" icon="warning">
          This is a warning alert.
        </Alert>
        <Alert color="green" icon="success">
          Operation successful!
        </Alert>
        <Alert icon="info">This is an info alert.</Alert>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Badges</h2>
        <div className="space-x-4">
          <Badge color="blue" size="sm" icon={<FaBell />}>
            Notification
          </Badge>
          <Badge color="red" size="lg" icon={<FaStar />}>
            Featured
          </Badge>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Card</h2>
        <Card
          href="https://github.com/NoelPerland"
          imgAlt="Example Image"
          imgSrc="ProfilePic"
        >
          <h3 className="text-lg font-bold">Noel Perland</h3>
          <p>Frontend Developer</p>
        </Card>
      </section>
    </div>
  );
}

export default App;
