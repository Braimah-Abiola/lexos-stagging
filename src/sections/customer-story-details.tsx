import Image from "next/image";

const CustomerStoryDetails = () => {
    return (
        <section className=" py-20 max-w-3xl mx-auto flex flex-col items-start">
            <p className=" text-lg font-normal text-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum dolorem eius accusantium, quo suscipit dicta perferendis unde ullam et corrupti dignissimos aperiam! Ducimus, officiis nisi quae iusto quidem tempore.</p>
            <h4 className=" font-semibold text-2xl mt-6">Here&apos;s How</h4>
            <div className=" w-full relative h-[28rem] my-6">
                <Image fill src="/assets/story.png" className=" rounded-xl object-cover" alt="Olympia" />
            </div>
            <p className=" text-lg font-normal text-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod rerum dolorem eius accusantium, quo suscipit dicta perferendis unde ullam et corrupti dignissimos aperiam! Ducimus, officiis nisi quae iusto quidem tempore.</p>
            <p className=" text-lg font-normal text-foreground mt-4">
                Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu. Malesuada in faucibus risus velit diam. Non, massa ut a arcu, fermentum, vel interdum. Malesuada facilisi libero, nam eu. Quis pellentesque tortor a elementum ut blandit sed pellentesque arcu.
            </p>
        </section>
    );
}

export default CustomerStoryDetails;