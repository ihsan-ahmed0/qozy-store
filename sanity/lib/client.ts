import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "skQzttGPUSqyNUws5AJyG2TZP8bWxBH7rKgYeVV0u8fIB6Mbjxug1oLk8ASHQx17wgJKyJkMcy2KNQaeFN8Eqnac5CdYNEUnvz2sWEBSzqkKislfuI7E5gzYUIlHGfCVfEIF2HmG7boKsd2pOeCFHNFMEUXyfj06DO71A4PuVQSIGz25WmLi",
})
