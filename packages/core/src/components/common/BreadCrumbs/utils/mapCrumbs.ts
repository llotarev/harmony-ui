import {BreadCrumbsTypes} from "@/components/common/BreadCrumbs";

function mapCrumbs<T>(crumb: BreadCrumbsTypes.Crumb<T>): Array<BreadCrumbsTypes.Crumb<T>> {
  if (crumb.nesting) {
    return [crumb, ...mapCrumbs(crumb.nesting)];
  }
  return [crumb];
}

export default mapCrumbs;
