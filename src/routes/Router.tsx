import { AboutPage } from "@/components/about/AboutPage";
import CertificatePage from "@/components/certificate/CertificatePage";
import ContactPage from "@/components/contact/ContactPage";
import { HomePage } from "@/components/home/HomePage";
import Layout from "@/components/layouts/Layout";
import ProjectPage from "@/components/project/ProjectPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {index: true, element: <HomePage />},
            { path: "about", element: <AboutPage />},
            { path: "projects", element: <ProjectPage />},
            { path: "certificates", element: <CertificatePage />},
            { path: "contact", element: <ContactPage />}
        ]
    }
])

export default router