const MEDIUM_PROFILE_URL = "https://medium.com/@yehezkieldio";

export function MediumLink() {
    return (
        <a className="motion-link motion-link-slow motion-title-link underline" href={MEDIUM_PROFILE_URL}>
            Medium
        </a>
    );
}
