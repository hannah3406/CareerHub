import HomeLayout from "components/Common/@Layout/layouts/HomeLayout";

import ThemeViewerPageContent from "./_fragments/ThemeViewerPageContent";

function ThemeViewerPage() {
  return <HomeLayout content={<ThemeViewerPageContent />} />;
}

export default ThemeViewerPage;
