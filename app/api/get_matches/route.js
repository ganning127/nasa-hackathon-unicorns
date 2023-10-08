import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import OpenAI from "openai";

/**
 *
 * @param {numMatches, description} request in JSON format in body
 * @returns semantic search for projects based on description
 *
 */
export async function GET(request)
{
    try
    {
        const numMatches = request.headers.get('numMatches');
        const desc = request.headers.get("description");

        const supabase = createRouteHandlerClient({ cookies: () => cookies() });

        // create embedding here
        // const embedding = await createEmbeddings({
        //     token: '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',
        //     model: 'text-embedding-ada-002',
        //     input: desc,
        // });
        const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

        const embedding = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input: desc,
        });

        const { data, error } = await supabase.rpc("match_documents", {
            query_embedding: embedding.data[0].embedding,
            match_threshold: 0.78,
            match_count: numMatches,
        });
        if (error)
        {
            throw new Error(error);
        }
        return NextResponse.json({ status: 200, body: data });
    } catch (error)
    {
        console.log(error);
        return NextResponse.json({ status: 500, body: error });
    }
}