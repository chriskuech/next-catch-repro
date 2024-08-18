import { triggerRepro } from "@/lib/actions";
import assert from "assert";

export default async function Home() {
  await triggerRepro().catch(() => null)

  assert(false, "This is a dynamic app and therefore the code should not be run during build")
}
