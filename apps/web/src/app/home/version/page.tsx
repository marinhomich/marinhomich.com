import { Alert, AlertDescription, AlertTitle } from "@marinhomich/ui/alert"

import { Icons } from "@/components/icons"
import Page from "@/components/Page"

export default function VersionPage() {
  return (
    <Page title="Version" description="Version Page.">
      <Alert>
        <Icons.terminal />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </Page>
  )
}
