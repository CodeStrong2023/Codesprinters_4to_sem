import { Link } from "react-router-dom";
import { Button, Card } from "../components/ui";
function NotFound() {
  return (
    <div className="flex items-center justify-center h-[100vh] w-full">
      <Card>
        <h1 className="text-4xl font-bold text-blue-600">404 - Not Found</h1>
        <Button>
          <Link to="/" className="text-white">
            Go back home
          </Link>
        </Button>
      </Card>
    </div>
  );
}

export default NotFound;
