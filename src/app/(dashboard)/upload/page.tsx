"use client";

import { Upload } from "lucide-react";
import { useState } from "react";
import Papa from "papaparse";
import { normalizeTransactions } from "@/lib/normalizeTransactions";
import { useTransactions } from "@/context/TransactionsContext";
import { addTransaction } from "@/lib/addTransaction";
export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState("");
  const {
    transactions,
    addTransaction,
  } = useTransactions();

  return (
    <main className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Upload Transactions
        </h1>

        <p className="text-muted-foreground mt-2">
          Upload your bank statement in CSV format to analyze your finances.
        </p>
      </div>

      <div className="border-2 border-dashed rounded-xl p-12 flex flex-col items-center justify-center text-center bg-card">

        <Upload className="h-14 w-14 text-primary mb-4" />

        <h2 className="text-xl font-semibold">
          Drag & Drop your CSV file
        </h2>

        <p className="text-muted-foreground mt-2 mb-6">
          or click below to choose a file
        </p>

        <input
          id="csv-upload"
          type="file"
          accept=".csv"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];

            if (!file) return;

            setSelectedFile(file);
            setUploadStatus("⏳ Processing your bank statement...");
            Papa.parse(file, {
              header: true,
              skipEmptyLines: true,

              complete: (results) => {
  console.log("Parsed CSV:", results.data);

  const cleanedTransactions = normalizeTransactions(
  results.data as any[]
);

(async () => {
  for (const transaction of cleanedTransactions) {
    await addTransaction({
      date: transaction.date,
      description: transaction.description,
      category: transaction.category,
      type: transaction.type,
      amount: transaction.amount,
    });
  }

  setUploadStatus(
    `✅ Successfully imported ${cleanedTransactions.length} transactions!`
  );
})();
  console.log("Normalized Transactions:", cleanedTransactions);
},

              error: (error) => {
                console.error(error);
                setUploadStatus("❌ Failed to import file.");
              },
            });
          }}
        />

        <label
          htmlFor="csv-upload"
          className="cursor-pointer rounded-lg bg-primary px-6 py-3 text-primary-foreground hover:opacity-90 transition"
        >
          Choose CSV File
        </label>

        {selectedFile && (
          <div className="mt-6 rounded-lg bg-green-500/10 border border-green-500/20 p-4">
            <p className="font-medium text-green-400">
              ✅ {selectedFile.name}
            </p>

            <p className="text-sm text-muted-foreground mt-1">
              {(selectedFile.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}
        {uploadStatus && (
  <div className="mt-4 rounded-lg border border-blue-500/20 bg-blue-500/10 p-4">
    <p className="text-blue-400 font-medium">
      {uploadStatus}
    </p>
  </div>
)}
        <p className="text-sm text-muted-foreground mt-6">
          Supported format: CSV
        </p>
      </div>

      {transactions.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">
            Parsed Transactions
          </h2>

          <div className="rounded-lg border overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  {Object.keys(transactions[0]).map((key) => (
                    <th
                      key={key}
                      className="text-left p-3 border-b"
                    >
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {transactions.map((row, index) => (
                  <tr key={index} className="border-b">
                    {Object.values(row).map((value, i) => (
                      <td key={i} className="p-3">
                        {String(value)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </main>
  );
}