import { type HeadFC, type PageProps } from "gatsby"
import React from "react"
import { Container, Row } from "react-bootstrap"
import ResourceCard from "../../components/ResourceCard"
import ResourceListSearchbar from "../../components/ResourceListSearchbar"
import SiteFooter from "../../components/SiteFooter"
import SiteMetaData from "../../components/SiteMetaData"
import SiteNavbar from "../../components/SiteNavbar"
import "../../scss/pages/resources.scss"
import repositoriesResources from "../../util/resources/repositoriesResources"

export const Head: HeadFC = () => (
    <>
        <html lang="en" />
        <SiteMetaData
            title="Repositories | Resources | PubParts.xyz"
            description="Various resources for VESC builders" />
    </>
)

const Page: React.FC<PageProps> = () => {
    return (
        <>
            <header>
                <SiteNavbar />

                <h1 className="flex-center">
                    Repositories Resources
                </h1>
            </header>

            <main className="page-resources">
                <Container>
                    {/* Search area */}
                    <ResourceListSearchbar resourceList={repositoriesResources} />

                    {/* Search results headers */}
                    <h2 id="resourceListHeader" style={{display: "block"}}>Resources</h2>
                    <h2 id="noResultsText" style={{display: "none", minHeight: "200px"}}>No results.</h2>

                    <Row>
                        {/* List resources */}
                        {!!repositoriesResources.length &&
                            repositoriesResources.sort((a, b) => a.title.localeCompare(b.title)).map(ResourceCard)
                        }
                    </Row>
                </Container>
            </main>
                
            <SiteFooter />
        </>
    )
}

export default Page