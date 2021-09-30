export default function TableStatistic(){
    return(
        <div class="w-full h-max bg-gray-800 flex justify-center items-center">
            <div class="container flex flex-col gap-4 mx-8">
                <label class="text-gray-100 font-semibold tracking-wider text-lg">Last Week</label>
                <div class="bg-gray-100 rounded-lg w-full h-auto py-4 flex flex-row justify-between divide-x divide-solid divide-gray-400">
                    <div class="relative flex-1 flex flex-col gap-2 px-4">
                        <label class="text-gray-800 text-base font-semibold tracking-wider">Total Visitor</label>
                        <label class="text-green-800 text-4xl font-bold">14K</label>
                        <div class="absolute bg-red-400 rounded-md font-semibold text-xs text-gray-100 p-2 right-4 bottom-0">
                            - 5%
                        </div>
                    </div>
                    <div class="relative flex-1 flex flex-col gap-2 px-4">
                        <label class="text-gray-800 text-base font-semibold tracking-wider">Total Click</label>
                        <label class="text-green-800 text-4xl font-bold">6K</label>
                        <div class="absolute bg-green-400 rounded-md font-semibold text-xs text-gray-100 p-2 right-4 bottom-0">
                            + 10%
                        </div>
                    </div>
                    <div class="relative flex-1 flex flex-col gap-2 px-4">
                        <label class="text-gray-800 text-base font-semibold tracking-wider">Total Profit</label>
                        <label class="text-green-800 text-4xl font-bold">$1.2M</label>
                        <div class="absolute bg-green-400 rounded-md font-semibold text-xs text-gray-100 p-2 right-4 bottom-0">
                            + 5%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}