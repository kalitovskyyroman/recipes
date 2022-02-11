import TestRenderer from "react-test-renderer";
import Footer from "../Footer";

describe("Footer component", () => {
    test("Render footer", async () => {
        const component = TestRenderer.create(<Footer />);
        const tree = component.toJSON();

        expect(tree).toMatchSnapshot();
    });
});
