export default function LoadingSpinner() {
  return (
    <div className="mt-6 flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 p-4">
      <div className="h-6 w-6 animate-spin rounded-full border-2 border-blue-600 border-t-transparent" />
      <div>
        <p className="font-medium">Generating service ticket...</p>
        <p className="text-sm text-gray-500">
          AI is analyzing the customer's request.
        </p>
      </div>
    </div>
  );
}