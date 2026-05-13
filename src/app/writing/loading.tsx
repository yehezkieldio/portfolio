import { SkeletonHeader, SkeletonRows } from "../_component/loading-blocks";

export default function WritingLoading() {
    return (
        <section className="space-y-7 sm:space-y-8">
            <SkeletonHeader />
            <SkeletonRows />
        </section>
    );
}
