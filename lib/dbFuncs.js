// import { pipeline } from '@xenova/transformers';
// const generateEmbedding = await pipeline('feature-extraction', 'Supabase/gte-small');

//import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js";

import { createClient } from '@supabase/supabase-js';

//1. Take input paragraph, embed, and return top 10 searches ids (frontend people can parse or us)

//Assuming we will store added projects in a json file
//2. getRecommendations - Parse file, get embeddings, get top 3 searches for last 5 added items
//Add project function
//



import data from './combined.json' assert { type: 'json' };

var string1 = JSON.stringify(data);
var parsed = JSON.parse(string1);



export const supabase = createClient(
    "https://klggurdxgegazptxicsl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtsZ2d1cmR4Z2VnYXpwdHhpY3NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NzAwNjgsImV4cCI6MjAxMjA0NjA2OH0.uKI5NhT0ziWdioKVUPqEfGDqJ6VCjpYHeHM3IDsB-_Q"
);

console.log("Test");

const title = 'First post!';
const body = 'Hello!';
const url = 'tests';
const sponsor = 'test';

// // Generate a vector using Transformers.js
// const output = await generateEmbedding(body, {
//     pooling: 'mean',
//     normalize: true,
// });

// Extract the embedding output
// const embedding = Array.from(output.data);

export const createEmbeddings = async ({ token, model, input }) =>
{
    const response = await fetch('https://api.openai.com/v1/embeddings', {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        body: JSON.stringify({ input, model }),
    });

    const { error, data, usage } = await response.json();
    console.log("ERROR", error);

    return data;
};


// try
// {
//     for (let i = 0; i < parsed.projects.length; i++)
//     {
//         const title = parsed.projects[i].title;
//         const body = parsed.projects[i].descrip;
//         const url = parsed.projects[i].url;
//         const sponsor = parsed.projects[i].sponsor;

//         const embedding = await createEmbeddings({
//             token: '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',
//             model: 'text-embedding-ada-002',
//             input: body,
//         });
//         //console.log(Array.from(embedding[0].embedding).length)

//         const { testcase, error } = await supabase.from('openai_embeddings').insert([{
//             title: title,
//             url: url,
//             descrip: body,
//             sponsor: sponsor,
//             embedding: Array.from(embedding[0].embedding)
//         }]);

//     }
// }

// catch (exceptionVar)
// {
//     console.log('Failed');
// }



// const { data: documents } = await supabase.rpc('match_documents', {
//     query_embedding: embedding, // Pass the embedding you want to compare
//     match_threshold: 0.78, // Choose an appropriate threshold for your data
//     match_count: 10, // Choose the number of matches
// });

// console.log(documents);