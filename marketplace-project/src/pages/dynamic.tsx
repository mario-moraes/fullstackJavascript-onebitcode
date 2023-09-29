// pages/dynamic.tsx

import { GetServerSideProps, NextPage } from "next"
import { ReactNode, useEffect, useState } from "react"
import { Col, Container, Row } from "reactstrap"

interface ApiResponse {
  name: string
  timestamp: Date
}

export const getServerSideProps: GetServerSideProps = async () => {
  const serverSideData: ApiResponse = await 
    fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then((res) => res.json())
    // using template strings to insert an environment variable and avoid errors with the absolute path required is this case
    // for production, the environment variables must be configured on Vercel website before deployment
    //.env files are a gitignore standard in order to secure sensitive information from public version control
    return {
      props: {
        serverSideData
      }
    }
}

const Dynamic: NextPage = (props: {
  children?: ReactNode
  serverSideData?: ApiResponse
}) => {

  const [clientSideData, setClientSideData] = useState<ApiResponse>()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch("/api/hello").then((res) => res.json())
    setClientSideData(data)
  }

  return (
    <Container tag="main">
      <h1 className="my-5">
        Learning how render works on Next.js
      </h1>

      <Row>
        <Col>
          <h3>
            Server-side render
          </h3>
          <h2>
            {props.serverSideData?.timestamp.toString()}
          </h2>
        </Col>

        <Col>
          <h3>
            Client-side render
          </h3>
          <h2>
            {clientSideData?.timestamp.toString()}
          </h2>
        </Col>
      </Row>
    </Container>
  )
}

export default Dynamic