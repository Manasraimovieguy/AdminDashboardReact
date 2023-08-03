import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className='featuredItem'>
        <span className="featuredTitle">User Information</span>
        <div className="featuredAutoSuggApp">
          <span className="featuredUsers">2,415</span>
          <span className="featuredUserRate">-11.4 <ArrowDownward className='featuredIcon negative' /></span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
      <div className='featuredItem'>
        <span className="featuredTitle">Auto-Suggestion Acceptance Analysis</span>
        <div className="featuredAutoSuggApp">
          <span className="featuredSuggestions">896</span>
          <span className="featuredAcceptedSuggestionsRate">-11.4 <ArrowDownward className='featuredIcon negative' /></span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
      <div className='featuredItem'>
        <span className="featuredTitle">Auto-Suggestion Rejection Analysis</span>
        <div className="featuredAutoSuggApp">
          <span className="featuredSuggestions">896</span>
          <span className="featuredRejectedSuggestionsRate">+8.4 <ArrowUpward className='featuredIcon' /></span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
    </div>
  );
}
