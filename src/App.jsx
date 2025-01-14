import Button from "./components/Button";
import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Card from "./components/Card";
import { FaStar, FaBell } from "react-icons/fa";

function App() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">React Components Demo</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="space-x-4">
          <Button size="lg" color="green">
            Large Button
          </Button>
          <Button size="sm" color="red" disabled>
            Disabled Small Button
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
          href="https://example.com"
          imgAlt="Example Image"
          imgSrc="https://via.placeholder.com/300"
        >
          <h3 className="text-lg font-bold">Card Title</h3>
          <p>This is a description inside the card.</p>
        </Card>
      </section>
    </div>
  );
}

export default App;
